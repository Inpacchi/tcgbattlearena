import { Controller, Post, Req } from '@nestjs/common';
import { TournamentService } from './tournament.service';

@Controller('tournaments')
export class TournamentController {
    constructor(
        private tournamentService: TournamentService
    ) {
    }
    @Post()
    create(@Req() request: Request): string {
        return 'This action creates a new tournament.';
    }
}
