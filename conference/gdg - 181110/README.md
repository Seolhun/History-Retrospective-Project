# 181110 GDG Conference

# WEB
## 실전 SPA 상태관리 톺아보기
- Speaker : 김동우 - React-Korea 그룹 운영(페이스북)

#### SPA란?
#### Redux-thunk vs Redux-saga vs Redux-observable

---
## 빠르다는 것 그 이상, Isomorphic PWA(feat. SSR + Code Splitting)
- SSR에서 기존 CSR에서 실행되던 설정들을 미리 SSR에서 설정하여준다. 
	- react-route-config
- red.send(html) 등을 통해 SSR에서 CSR DOM을 Listen 시킨다.

#### PWA (NginX에 대해서 인지하기)
- Client > Worker > Cache, Server
- PWA Check List
- sw-precache, sw-toolbox library
	- `workbox`(google opensources for service worker) 
- Cache 관련 설정을 JavaScript 설정으로 Worker에 정의 할 것
- **Service Worker** is important

---

## Chromium/Blink는 어떻게 동작하는가?
- Speaker : 방진호 - 삼성전자 브라우저 개발자

- Chromium이란?
	- 소스 코드만 13GB, IMAC 5K 기준 빌드 3시간
- Chromium/Blink 내부를 알면 좋은 점
	- 브라우저 플랫폼 개발
	- `웹 표준 개발 참여가능`
- Chromium `Multi Process` Archtecture
	- Carsh가 발생해도 죽지 않는다.(ex - Explore 경우는 죽는다.(Multi Thread))
	- Site isolation
		- Wrapper Browser를 통한 외부에서 내부 Process 접근이 원초적으로 차단된다.(Prevented Cross origin - like 'IFame')
- Browser > Renderer
	- Renderer는 웹 컨텐츠를 담당
	- Browser는 외부와 소통(System call)을 한다.

#### Chrome Engines
	- Rendering Engine(Blink)
	- JavaScript Engine(V8)
	- Graphics Library(SKIA)

#### How to rendered Web (About Blink Engine)
- Parsing - `HTMLDocumentParser`
	- HTML > DOM Tree
- Style
	- CSS > CSSOM Tree
	- CSS Parsing : DOM 생성 중간
	- Style Update : DOM 생성 후
- Traverse
	- DOM + CSSOM = Layout tree
	- 불필요한 값을 제거
- Layout(re-flow)
	- DOM tree - Rendering tree
	- Rendering Tree의 배치를 구성 함
- Layerlization
	- z-index와 같은 값을 계산하여 우선순위를 지정
	- Rendering Tree
- Paint
	- SKIA를 통해 Rendering tree에 대한 값을 Paint

#### V-Sync Timeline
- 16.7ms 정도보다 빠르게 Parsing > Paint의 과정이 일어나야함
	- 초과할 경우 Frame-drop 현상이 일어남.
- FrameDrop의 해결책
	- Main Thread에서 Recording(Main Thread)
		- DOM, JS, Rec
	- Playback(Raster Threads)
	- Compositing(병합하여 렌더링)

#### Keywords
- Painting: 넓은 의미로 Rendering 과정 전체, 좁은 의미로 Recording
- Recording : Blink 관점에서 Painting, 그림 그리는 연산을 기록하는 행위
- Rasterization: Pixel buffer에 그림을 실제로 그리는 행위
- Compositing : 여러장의 그림을 합성하는 행위
- Drawing : 그림을 사용자가 볼 수 있는 화면에 출력하는 행위

#### Issues
- Modern-browser의 대부분은 GPU 가속을 사용(속도 향상을 위해)
	- 각종 변환을 빠르게 
	- 텍스처(Bitmap)를 빠르게 합성
- GPU 가속은 OpenGL을 사용 한다.

#### Compositing
- 각각의 Layer를 병렬로 그린 후 Compositing 하는 것.
- GPU Compositing
	- GPU 메모리에 cache 시킨 후 필요할 때 꺼내쓴다.

---
# Cloud
## go와 gRPC로 함꼐하는 MicroService

## Keywords
1. Stub
	- Plyglot Programming, 서로 다른 언어를 쉽게 사용할 수 있게 해준다.
2. IDL(Interface Definition Language)
	- Stub 코드 생성
3. Protocol Buffer
	- 구글의 직렬화(Serialization) 메카니즘
	- IDL 기준으로 언어에 대한 stub와 service interface code 생성
4. gRPC Gateway
5. Http request multiplexer