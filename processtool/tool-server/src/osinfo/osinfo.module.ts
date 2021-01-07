import { Module } from '@nestjs/common';
import { OSInfoController } from './osinfo.controller';
import { OSInfoService } from './osinfo.service';

@Module({
  imports: [],
  controllers: [OSInfoController],
  providers: [OSInfoService],
})
export class OSInfoModule {}
