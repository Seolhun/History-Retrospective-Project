# Serverless Example
- Author : [SeolHun](https://github.com/Seolhun/)

## Create Template
- AWS nodejs 템플릿 만들기 
`sls -t template aws-nodejs`

- function handler.`hello` 와 module.exports.`hello`를 맞춘다.	
```javascript
module.exports.hello = (event, context, callback) => {}
```
```yaml
functions:
  hello:
    handler: handler.hello
```

- Local Test
`sls invoke local -f hello`