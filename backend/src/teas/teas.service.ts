import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tea, TeaDocument } from './teas.schema';

@Injectable()
export class TeasService {
  constructor(@InjectModel(Tea.name) private teaModel: Model<TeaDocument>) {}

  async findAll(): Promise<Tea[]> {
    return this.teaModel.find().exec();
  }
}
