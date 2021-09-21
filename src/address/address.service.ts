import { Injectable } from '@nestjs/common';
import { AddressDto } from './dto/address.dto';
import { Address } from './address.entity';

@Injectable()
export class AddressService {
  async create(addressDto: AddressDto): Promise<Address> {
    const address = Address.create(addressDto);
    await address.save();
    return address;
  }
}
