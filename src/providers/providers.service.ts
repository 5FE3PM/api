import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { Provider } from './provider.entity';
import { Address } from '../address/address.entity';

@Injectable()
export class ProvidersService {
  async getAllProviders(): Promise<Provider[]> {
    let providers = await Provider.find({ relations: ['address'] });
    providers = providers.map((provider: Provider) => {
      delete provider.password;
      return provider;
    });
    return providers;
  }

  async create(createProviderDto: CreateProviderDto): Promise<Provider> {
    const providerAddress = Address.create({
      street: createProviderDto.street,
      subdivision: createProviderDto.subdivision,
      region: createProviderDto.region,
    });
    await providerAddress.save();
    const provider = Provider.create({
      ...createProviderDto,
      address: providerAddress,
    });
    await provider.save();
    delete provider.password;
    return provider;
  }
}
