import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KongModule } from './kong/kong.module';

@Module({
  imports: [KongModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
