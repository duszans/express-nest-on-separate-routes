import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from NestJs! It is just a sample controller - other may be added as required';
  }
}
