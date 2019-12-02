import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('user')
export class UserEntity {
	@PrimaryGeneratedColumn('uuid') id: string

	@Column('varchar', { length: 500 })
    name: string
    
	@Column('varchar', { length: 500, unique: true })
	username: string

	@Column('varchar', { length: 500 })
    password: string
    
    @Column('varchar', { length: 500 , unique: true })
	email: string
}