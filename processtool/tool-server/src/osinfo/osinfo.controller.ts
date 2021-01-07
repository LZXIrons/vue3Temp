import { Controller, Get } from '@nestjs/common';
import { OSInfoService } from './osinfo.service';

@Controller('osinfo')
export class OSInfoController {
  constructor(private readonly osinfoService: OSInfoService) {}

  @Get('all')
  getAll(): Object {
    return this.osinfoService.getAll();
  }
}
