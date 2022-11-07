import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Coffee')
export class CoffeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
