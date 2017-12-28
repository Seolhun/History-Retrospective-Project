# Custom FormGroup Analysis
- Author : [Croquis Dev Team](https://github.com/croquiscom)
- Started Date: 2017.12.28

## Intro
- FormGroup은 typescript와 mithril을 이용하여 form 형식의 view단을 react하게 쉽고 구조적으로 만들 수 있습니다.
- validation은 물론이며, 해당 값과 객체를 실시간으로 react하게 바인딩하여 값을 변환/반환합니다.

## Requirement package
	- typescript
	- JSX
	- mithril, mitrhil/stream
	- [lodash](https://lodash.com/)

## Requirement Structure(class, interface ...)
- ZigzagNotice를 작업하면서 작성한 문서로서 ZigzagNotice로 설명하겠습니다.

1. Model (ex - ZigzagNotice.ts)
	- API와 연결될 모델로서 대부분의 타입이 primitive type으로 설정되어있는 객체입니다.
2. ModelFormValue (ex - ZigzagNoticeFV.ts)
	- form형식의 view를 구조적으로 만들기 위한 FormViewModel에 가깝습니다.
	- Model과 같은 구조이지만 Mithril/Stream을 이용하여 Stream(function) 타입을 갖습니다. 다만, Stream 안에 해당 value값은 Model과 같은 primitive type을 갖는다.
3. ModelFormGroup (ex - ZigzagNoticeFormGroup.tsx)
	=> 이름에 FormGroupView로 명명하는 것이 FormGroup의 View라는 직관성을 가질 수 있다고 판단됩니다.
	- model과 modelFormValue를 이용한 Form형식을 만들기 위한 view입니다.

## FormGroup Structure & Usage
- FormValueGroup {} : ModelFormGroup을 만드는 module
	- FormObjectValue : ModelFormGroup에 Properties Object 타입 객체를 정의하는 fn
		- FormObjectArrayValue (Array Type) : FormObjectValue에서 Array타입일 경우 사용되는 fn
		- FormObjectValue (Object Type) : FormObjectValue에서 Array타입이 아니며 Object타입일 경우 사용되는 fn
		- FormValue (Primitive Type) : primitive type으로 지정하거나, FormObjectValue에서 Array, Object타입이 아닌 경우 사용되는 fn

## Process
1. Model과 같은 FormModel(ModelFV)을 만든다. 타입은 FormValue를 이용한다.
	- **FormValue**에 대해서 알고가자
		- FormValue는 Mithril/Stream을 상속받아 구현하였으므로 Stream과 같으며 추가적인 기능이 구현되었다.
		- FormValue는 lodash에 있는 [_.cloneDeep](https://lodash.com/docs/4.17.4#cloneDeep)을 이용하여 다른 주소값으로 값을 복사한다.(즉, ) 
1. FormValueGroup
	- FormValueGroup에 FormObjectValue<T>로 생성한 값을 

