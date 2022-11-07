import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeChallengeController } from './code-challenge/code-challenge.controller';
import { CoffeeEntity } from './code-challenge/code-challenge.entity';
import { CodeChallengeModule } from './code-challenge/code-challenge.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'mvst-coffee-tea-challenge-db',
      entities: [CoffeeEntity],
      synchronize: true,
    }),
    CodeChallengeModule,
  ],
  controllers: [CodeChallengeController],
  providers: [],
})
export class AppModule {}
