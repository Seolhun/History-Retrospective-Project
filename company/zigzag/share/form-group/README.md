# Custom FormGroup Analysis
- Author : [Croquis Dev Team](https://github.com/croquiscom)
- Date : 2017.12.28

## Intro
- FormGroup은 [Typescript](https://www.typescriptlang.org/index.html)와 [Mithril](https://mithril.js.org/)을 이용하여 form 형식의 view를 구조적으로 쉽게 만들 수 있도록 작성되었습니다.
- 유효성 검사를 정의해서 각 form 기능에 맞게 사용할 수 있습니다.

## Requirement package
	- [Typescript](https://www.typescriptlang.org/index.html)
	- JSX
	- [Mithril](https://mithril.js.org/), [Mithril/Stream](https://mithril.js.org/stream.html)
	- [lodash](https://lodash.com/)

## Requirement Structure(class, interface ...)
- ZigzagNotice를 작업하면서 작성한 문서로서, ZigzagNotice 예제를 통해 설명하겠습니다.

1. Model (ex - ZigzagNotice.ts)
	- API와 연결될 모델로서 대부분의 타입이 primitive type으로 설정되어있는 객체입니다.
2. ModelFormValue (ex - ZigzagNoticeFV.ts)
	- form형식의 view를 구조적으로 만들기 위한 FormViewModel에 가깝습니다.
	- Model과 같은 구조이지만 Mithril/Stream을 이용하여 Stream(function) 타입을 갖습니다. 다만, Stream 안에 해당 value값은 Model과 같은 primitive type을 갖습니다.
3. ModelFormGroup (ex - ZigzagNoticeFormGroup.tsx)
	=> 이름에 FormGroupView로 명명하는 것이 FormGroup의 View라는 직관성을 가질 수 있다고 판단됩니다.
	- model과 modelFormValue를 이용한 Form형식을 만들기 위한 view입니다.

## FormGroup Structure & Usage
- FormValueGroup {} : ModelFormGroup을 만드는 module
	- FormObjectValue : ModelFormGroup에 Properties Object 타입 객체를 정의하는 fn입니다.
		- FormObjectArrayValue (Array Type) : FormObjectValue에서 Array타입일 경우 사용되는 fn
		- FormObjectValue (Object Type) : FormObjectValue에서 Array타입이 아니며 Object타입일 경우 사용되는 fn입ㄴ다.
		- FormValue (Primitive Type) : primitive type으로 지정하거나, FormObjectValue에서 Array, Object타입이 아닌 경우 사용되는 fn입니다.

## Process
1. Model과 같은 FormModel(ModelFV)을 만듭니다. 타입은 FormValue를 이용합니다.
	- **FormValue**에 대해서 알고가면 좋을 것 같습니다.
		```typescript
		interface FormValue<T, U = T> extends Stream.Stream<U> {
			is_modified: Stream.Stream<boolean>;
			error_message: Stream.Stream<string>;
			validation_state: Stream.Stream<string>;
			reset: () => void;
			save: () => void;
			toValue: () => T;
		}
		``` 
		- FormValue 특징
			1. FormValue<T>로 생성된 객체는 Stream처럼 steam()에 값을 갖고 있습니다.
				- FormValue는 lodash에 있는 [_.cloneDeep](https://lodash.com/docs/4.17.4#cloneDeep)을 이용하여 같은 값을 재귀적으로(다른 주소값으로 값으로) 복사하여 저장합니다. (값을 비교하기 위해선 [_.isEqual](https://lodash.com/docs/4.17.4#isEqual)을 사용할 수 있습니다).
			2. is_modified(boolean)는 입력된 값을 확인하여 초기 값과의 동등여부를 체크합니다. 위에서 말한 _.isEqual을 사용합니다.
			3. validation_state(string)는 error_message 존재여부와 수정여부를 체크하여 `has-error`와 `has-success` 결과를 반환합니다.
			4. reset()은 value를 초기값으로 바꿔줍니다.
			5. save()는 해당 값을 stream()안에 넣어줍니다. 초기생성과 저장시에 작동됩니다.
			6. toValue()는 stream()안에 해당 값을 넣어줍니다.
2. ViewModel을 FormValueGroup<T>를 상속받아 구현합니다.
	- **FormValueGroup<T>**에 대해 알고가면 좋을 것 같습니다.
		```typescript
			class FormValueGroup<T> {
			  is_valid: Stream.Stream<boolean>;
			  is_modified: Stream.Stream<boolean>;
			  reset: () => void;
			  save: () => void;

			  constructor(original: T) {
			    this.initFormValues(original);

			    const form_value_list = this.getFormValueList();

			    Stream.merge(form_value_list).map(() => this.checkValidateAll());

			    this.is_modified = Stream.merge(_.map(form_value_list, 'is_modified')).map((modified_list) => modified_list.indexOf(true) >= 0);
			    this.is_valid = Stream.merge(_.map(form_value_list, 'error_message')).map((error_message_list) => error_message_list.join('').trim().length === 0);
			    this.reset = () => form_value_list.map((stream) => stream.reset());
			    this.save = () => form_value_list.map((stream) => stream.save());
			  }

			  initFormValues(original: T) {
			    // TODO: set form value
			  }

			  getFormValueList(): Array<FormValue<any>> {
			    return [];
			  }

			  checkValidateAll() {
			    // TODO check validate and set error message...
			  }

			  toFormData(): FormData {
			    return new FormData();
			  }

			  toObject() {
			    return {};
			  }
			}
		```
		- FormValueGroup 특징
			1. 
	- ```typescript
		class ZigzagNoticeViewModel extends FormValueGroup<ZigzagNotice> {
		  notice: FormObjectValue<ZigzagNotice, ZigzagNoticeFV>;
		  original_notice: ZigzagNotice;
		  is_modified: Stream.Stream<boolean>;

		  initFormValues(original: ZigzagNotice) {
		    this.notice = FormObjectValue(original);
		    this.original_notice = _.clone(original);
		    this.is_modified = Stream(false);
		  }

		  getFormValueList(): Array<FormValue<any>> {
		    return [this.notice];
		  }

		  checkValidateAll() {
		    this.is_modified(!_.isEqual(this.notice.toValue(), this.original_notice));
		    this.notice().contents.error_message(validateContents(this.notice().contents()));
		    this.notice().link.error_message(validateLink(this.notice().link()));
		  }

		  toObject() {
		    return this.notice.toValue();
		  }
		}
	```

3. validation Fn을 구현합니다.
4. save Fn을 구현합니다.

