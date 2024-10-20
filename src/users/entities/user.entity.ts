import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @Length(2, 50)
    name: string;

    @Column()
    @IsNotEmpty()
    @Length(6, 100)
    password: string;

    @Column({ unique: true })
    @IsEmail()
    email: string;
}
