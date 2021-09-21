import { Body, Controller, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDto } from './dto/address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Body() addressDto: AddressDto) {
    return this.addressService.create(addressDto);
  }
}
