import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { AddressService } from '../address/address.service';
import { RegionsService } from '../regions/regions.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, AddressService, RegionsService],
})
export class ClientsModule {}
