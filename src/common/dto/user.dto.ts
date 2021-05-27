import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';

export class UserDto extends JoinRequestDto {
  @ApiProperty({
    required: true,
    example: 1,
    description: '아이디',
  })
  id: number;
}

/**
 * Dto 만들면 좋은점
 * 런타임에도 존재하는 클래스라서
 * 벨리데이션하는 라이브러리 붙여서
 * body 받음과 동시에 벨리데이션까지 같이할 수 있다.
 *
 */
