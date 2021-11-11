import { Module, CacheModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CacheModule.register({
    isGlobal: true,
    ttl: 360,
    // Max number of cached items
    max: 20,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
