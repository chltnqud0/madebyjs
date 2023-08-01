import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from './boards/board.entity';
import { BoardRepository } from './boards/board.repository';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardEntity, BoardRepository]),
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule
  ],
  providers: [BoardEntity],
  exports: [BoardEntity]
})
export class AppModule {}
