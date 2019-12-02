import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { UserEntity } from './user.entity';

@Entity('activity')
export class ActivityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    curriculumactivity: string;

    @Column({ length: 500 })
    manager: string;

    @Column('date')
    date: string;

    @Column('text')
    hour: string;

    @Column({ default: 'Baja' })
    priority: string;

    @Column({ default: false })
    state: boolean;

    @Column({ default: '' })
    description: string;


    @ManyToOne(type => UserEntity, user => user.activities)
    author: UserEntity;
}