import {
  IsBoolean,
  IsEmail,
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
  street: string;

  @IsString()
  subdivision: string;

  @IsString()
  region: string;
}
