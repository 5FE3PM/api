import { BaseEntity, Entity, OneToMany } from 'typeorm';
import { Business } from './business.entity';
import { JoinTable } from 'typeorm/browser';
import { Category } from '../categories/entities/category.entity';

@Entity({ name: 'business.business_category' })
export class BusinessCategory extends BaseEntity {
  @OneToMany(() => Business, (business) => business.id)
  @JoinTable()
  business: Business;

  @OneToMany(() => Category, (category) => category.id)
  @JoinTable()
  category: Category;
}
