import glob from 'glob';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './tournaments/entities/tournament.entity';
import { TournamentController } from './tournaments/tournament.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'yovarniyearwood',
      password: '',
      database: 'yovarniyearwood',
      entities: [Tournament],
      synchronize: true,
    }),
  ],
  controllers: [AppController, TournamentController],
  providers: [AppService],
})
export class AppModule {}
