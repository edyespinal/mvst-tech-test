import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeasController } from './teas.controller';
import { Tea, TeaSchema } from './teas.schema';
import { TeasService } from './teas.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tea.name, schema: TeaSchema }])],
  controllers: [TeasController],
  providers: [TeasService],
})
export class TeasModule {}
