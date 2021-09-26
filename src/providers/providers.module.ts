import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { AddressService } from '../address/address.service';
import { RegionsService } from '../regions/regions.service';

@Module({
  controllers: [ProvidersController],
  providers: [ProvidersService, AddressService, RegionsService],
})
export class ProvidersModule {}
