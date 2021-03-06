import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { ActivityModule } from './modules/activity/activity.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule,ActivityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
