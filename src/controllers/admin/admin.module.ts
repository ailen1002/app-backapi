import { Module } from '@nestjs/common';
import { WorkHistoryController } from './work-history/work-history.controller';

@Module({
  controllers: [WorkHistoryController]
})
export class AdminModule {}
