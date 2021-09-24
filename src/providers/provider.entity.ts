import {
  BaseEntity,
  Column,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from '../address/address.entity';

export class Provider extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @Column()
  fullname: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  validated: boolean;

  @Column()
  cash: boolean;

  @Column()
  credit: boolean;
}
