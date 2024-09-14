import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tournament {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    format: string;

    @Column()
    status: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    participants: number;

    @Column()
    rounds: number;

    @Column()
    location: string;

    @Column()
    entryFee: number;

    @Column()
    metaFormat: string;

    @Column()
    description: string;

    @Column()
    rules: string;

    @Column()
    stageId: number;

    @Column()
    organizerId: number;

    @Column()
    prizeStructureId: number;

    @Column()
    gameId: number;

    @Column()
    standingsId: number;
}
