import { Module } from '@nestjs/common';
import { KongController } from './kong.controller';
import { KongService } from './kong.service';

@Module({
  controllers: [KongController],
  providers: [KongService],
})
export class KongModule {}
