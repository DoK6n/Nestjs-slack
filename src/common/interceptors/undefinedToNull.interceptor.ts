import { CallHandler, ExecutionContext } from '@nestjs/common';
import { Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UndefinedToNullInterCeptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // 컨트롤러 실행 전 부분
    return next.handle().pipe(map(data => (data === undefined ? null : data)));
    // 데이터를 한번 더 가공할때 주로 씀
  }
}

/**
 * AOP
 *        미들웨어
 * router A -> B -> C -> D
 *
 * router A -> C -> D
 *
 * router A -> E -> F -> D -> G
 *
 * router Z -> A -> X -> D
 *
 * 라우터들이 각각 저런식의 방향으로 실행이 된다고 볼때,
 * 세로로 보면 공통되는 중복된 미들웨어가 있는데 이런 중복되는 것을 줄이는 개념
 * 이런 처리를 해주는 것이 인터셉터
 *
 * 컨트롤러 실행 전 후로 동작들을 넣어줄 수 있다.
 * ex) 컨트롤러 다음에 어떤 동작을 할지
 *
 *
 * implements -> 타입을 정확하게 지켜서 구현할 수 있도록 도와준다
 *
 *
 * 컨트롤러에서 return 해주는 data
 * data === user
 * { data: user, code: 'SUCCESS' }
 *
 *
 * 에러도 처리할 수 있지만 에러는 exception filter!
 */
