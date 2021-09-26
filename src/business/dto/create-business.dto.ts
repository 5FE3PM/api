import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBusinessDto {
  @IsNumber()
  addressId: number;

  @IsNumber()
  ownerId: number;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  logo: string;
}
