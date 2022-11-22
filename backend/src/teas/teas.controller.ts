import { Controller, Get } from '@nestjs/common';
import { TeasService } from './teas.service';

@Controller({
  path: 'v1/api/teas',
  version: '1',
})
export class TeasController {
  constructor(private readonly teasService: TeasService) {}

  @Get()
  async findAll() {
    const teas = await this.teasService.findAll();

    return teas;
  }
}
