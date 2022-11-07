import { Controller, Get } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Controller('code-challenge')
export class CodeChallengeController {
  constructor() {}

  @Get()
  async fetchAll() {
    return await getConnection()
      .createQueryBuilder()
      .select('*')
      .from('Coffee', 'coffee')
      .getRawMany();
  }
}
