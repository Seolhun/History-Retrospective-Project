# Travis CI

## 1. Docker run

- Current volume is mounted into Docker

```
docker run -it -v $(pwd):/app ruby:2.3 sh
```

## 2. Install Travis Cli

```
gem install travis
```

## 3. Login Travis

```
travis login --pro --github-token ${GITHUB_TOKEN}
```

## 4. Set Google IAM secret-account.json

```
cd app

travis encrypt-file service-account.json -r ${GITHUB_USER_NAME}/${GITHUB_REPO}
```

## 5. Set Encrypted files into .travis.yml before_install

```
rm -rf service-account.json
```

## 6. Copy/Past Encrypted files into .travis.yml before_install

```yml
before_install:
  - openssl aes-256-cbc -K $encrypted_0c35eebf403c_key -iv $encrypted_0c35eebf403c_iv -in service-account.json.enc -out service-account.json -d
```

## Refs

- [Travis Encrypting-files](https://docs.travis-ci.com/user/encrypting-files/)
