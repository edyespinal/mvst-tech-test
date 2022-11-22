import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeasModule } from '../teas/teas.module';
import { CoffeesModule } from '../coffees/coffees.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    CoffeesModule,
    TeasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
