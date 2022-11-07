import { Module } from '@nestjs/common';
import { CodeChallengeController } from './code-challenge.controller';

@Module({
  controllers: [CodeChallengeController],
  providers: [],
})
export class CodeChallengeModule {}
