import { Module } from '@nestjs/common';
import { OSInfoModule } from './osinfo/osinfo.module';

@Module({
  imports: [OSInfoModule]
})
export class AppModule {}
