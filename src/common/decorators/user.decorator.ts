import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// @Req, @Res 쓰지 않기 위한 커스텀 데코레이터 만들기

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
