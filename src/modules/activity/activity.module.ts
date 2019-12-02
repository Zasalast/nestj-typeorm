import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../models/user.entity';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { ActivityEntity } from '../../models/activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature( [UserEntity,ActivityEntity])],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
