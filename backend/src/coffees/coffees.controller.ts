import { Controller, Get } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller({
  path: 'v1/api/coffees',
  version: '1',
})
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  async findAll() {
    const coffees = await this.coffeesService.findAll();

    return coffees;
  }
}
