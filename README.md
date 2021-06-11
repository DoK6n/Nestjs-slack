# NestJS Sleact

## npm setup

```bash
$ npm install
```

```bash
#.env 파일 생성 후
SECRET=이름
PORT=원하는포트번호
COOKIE_SECRET=cookieyamyam
```


## 실행

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API 문서 - _swagger_

`localhost:3030/api`

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

# 강의노트

- express는 라우터 위주의 설계
- nestJS는 모듈 위주의 설계

- 모듈들을 imports 부분에다 넣어두면 AppModule이랑 다 연결이 된다
- nest가 모듈간의 연결된 것을 파악을 해서 한방에 실행을 해준다
- 콘솔창에 연결관계들이 뜨기 때문에 콘솔창에 뜨는 [Nest] 메시지들을 잘 확인해야 한다

## Controller

- 맵핑, 라우터같은 기능을 한다

## Service

- 비즈니스 로직 처리
- 테스트할때도 편리하고 재사용하기도 좋다

## @Injectable

- DI (Dependency Injection): 의존성 주입

## Nest에서는 Interface보다 Class를 주로 이용함

- interface는 타입스크립트에만 존재하기 때문에 타입스크립트 컴파일링이 끝나면 사라지지만,
- class는 남아있기 때문에 자바스크립트단에서도 타입검증이 가능하게 됨

## Interceptor

### AOP

- router A -> B -> C -> D
- router A -> C -> D
- router A -> E -> F -> D -> G
- router Z -> A -> X -> D
- 라우터들이 각각 저런식의 방향으로 실행이 된다고 볼때, 
- 세로로 보면 공통되는 중복된 미들웨어가 있는데 이런 중복되는 것을 줄이는 개념
- 이런 처리를 해주는 것이 **인터셉터**
- 컨트롤러 실행 전 후로 동작들을 넣어줄 수 있다. _ex) 컨트롤러 다음에 어떤 동작을 할지_
- **implements** -> 타입을 정확하게 지켜서 구현할 수 있도록 도와준다
- 컨트롤러에서 return 해주는 data
- data === user
- { data: user, code: 'SUCCESS' }
- 에러도 처리할 수 있지만 에러는 **exception filter**!

## swagger

```bash
$ npm install --save @nestjs/swagger swagger-ui-express
```

```javascript
// main.ts
const config = new DocumentBuilder()
  .setTitle('Sleact API')
  .setDescription('Sleact 개발을 위한 API 문서입니다.')
  .setVersion('1.0')
  .addCookieAuth('connect.sid')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

// controller
@ApiOperation()
@ApiTags()
@ApiResponse()
@ApiParam()
```

## 커스텀 데코레이터

- nestJS 쓸때 HTTP서버가 되는게 아니라 한서버 안에서 웹소켓, HTTP, RPC서버 동시에 돌릴 수 있는데,
- 그것들을 모두 다 하나의 실행 컨텍스트안에서 관리를 하고,
- 실행 컨텍스트안에서 HTTP서버를 가져오고 싶을땐 switchToHttp
- RPC는 switchToRpc, 웹소켓은 switchToWs로 가져오면 된다.

## DTO

### Dto 만들면 좋은점
- 런타임에도 존재하는 클래스라서 
- 벨리데이션하는 라이브러리 붙여서 body 받음과 동시에 벨리데이션까지 같이할 수 있다
 
