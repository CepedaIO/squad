import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Group} from "./Group";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(type => Group, group => group.owner)
  groups!: Group[];
}