import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coffee, CoffeeDocument } from './coffees.schema';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectModel(Coffee.name) private coffeeModel: Model<CoffeeDocument>,
  ) {}

  async findAll(): Promise<Coffee[]> {
    return this.coffeeModel.find().exec();
  }
}
