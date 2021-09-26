import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateProviderDto {
  @IsString()
  fullname: string;

  @IsString()
  @Length(10, 10)
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  @IsOptional()
  validated: boolean;

  @IsBoolean()
  cash: boolean;

  @IsBoolean()
  card: boolean;

  @IsString()
  firstAddress: string;

  @IsString()
  secondAddress: string;

  @IsNumber()
  regionId: number;
}
