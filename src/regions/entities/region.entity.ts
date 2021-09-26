import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'regions' })
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
