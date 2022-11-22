import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeasModule } from 'src/teas/teas.module';
import { CoffeesModule } from '../coffees/coffees.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    CoffeesModule,
    TeasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
