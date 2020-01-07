# Config
All about `next.confug.js`

## assetPrefix
assetPrefix를 붙이면 proxy를 이용하여 build된 파일들의 경로를 바꿔준다

예를들어, assetPrefix에 `/assets`를 붙이면 기존 next.js를 빌드된 `/_next/*`의 파일들이 `/assets/_next/*`로 바뀌어서 실행된다.

여기서 중요한 점은, next.js에서의 assets configuratins은 build되는 파일의 경로를 바꾸지 않고, assetsPrefix의 값을 추가하여 proxy를 이용하여 해당 resources를 읽는다는 것이다.

> Micro service를 구축하는 중에 생긴 문제는, static된 파일들의 경로는 해당 option으로 적용되지 않는다는 것이다. 여러가지 방법이 보이지만, static 파일의 요청이 온 경우 server에서 replace 혹은 rewrite하는 옵션으로 해당 문제를 해결할 수 있을것으로 판단된다.

