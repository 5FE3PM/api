import { IsBoolean, IsEmail, IsString, Length } from 'class-validator';

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
  cash: boolean;

  @IsBoolean()
  card: boolean;
}
