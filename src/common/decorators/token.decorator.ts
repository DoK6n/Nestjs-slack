import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// @Req, @Res 쓰지 않기 위한 커스텀 데코레이터 만들기

export const Token = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const response = ctx.switchToHttp().getResponse();
  ctx.switchToRpc;
  ctx.switchToWs;
  return response.locals.jwt;
});

// @Token() token

/**
 * nestJS 쓸때 HTTP서버가 되는게 아니라 한서버 안에서 웹소켓, HTTP, RPC서버 동시에 돌릴 수 있는데,
 * 그것들을 모두 다 하나의 실행 컨텍스트안에서 관리를 하고,
 * 실행 컨텍스트안에서 HTTP서버를 가져오고 싶을땐 switchToHttp
 * RPC는 switchToRpc, 웹소켓은 switchToWs로 가져오면 된다.
 */
