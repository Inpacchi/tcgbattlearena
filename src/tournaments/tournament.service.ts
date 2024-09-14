import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TournamentService {
    constructor(
        @InjectRepository(Tournament)
        private tournamentRepo: Repository<Tournament>,
    ) {}

    findAll(): Promise<Tournament[]> {
        return this.tournamentRepo.find();
    }

    findOne(id: number): Promise<Tournament | null> {
        return this.tournamentRepo.findOneBy({ id });
    }

    async create(tournament: Tournament): Promise<void> {
        await this.tournamentRepo.save(tournament);
    }

    async remove(id: number): Promise<void> {
        await this.tournamentRepo.delete(id);
    }
}
