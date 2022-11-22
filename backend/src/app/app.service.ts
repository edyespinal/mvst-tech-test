import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  helloMVST(): string {
    return 'Hello MVST!';
  }
}
