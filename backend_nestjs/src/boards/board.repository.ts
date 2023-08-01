import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardEntity } from './board.entity';
import { Board } from './board.model';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(
    @InjectRepository(BoardEntity)
    private readonly repository: Repository<Board>
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
