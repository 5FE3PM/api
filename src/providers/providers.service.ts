import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { Provider } from './provider.entity';
import { AddressService } from '../address/address.service';

@Injectable()
export class ProvidersService {
  constructor(private addressService: AddressService) {}

  async getAllProviders(): Promise<Provider[]> {
    let providers = await Provider.createQueryBuilder('providers')
      .leftJoinAndSelect('providers.address', 'address')
      .leftJoinAndSelect('address.region', 'region')
      .getMany();
    providers = providers.map((provider: Provider) => {
      delete provider.password;
      return provider;
    });
    return providers;
  }

  async getProviderById(id: number): Promise<Provider> {
    const provider = await this.findById(id);
    delete provider.password;
    return provider;
  }

  async findById(id: number): Promise<Provider> {
    const provider = await Provider.findOne(id, { relations: ['address'] });
    if (!provider) {
      throw new NotFoundException();
    }
    return provider;
  }

  async create(createProviderDto: CreateProviderDto): Promise<Provider> {
    const providerAddress = await this.addressService.create({
      firstAddress: createProviderDto.firstAddress,
      secondAddress: createProviderDto.secondAddress,
      regionId: Number(createProviderDto.regionId),
    });
    console.log(providerAddress);
    const provider = Provider.create({
      ...createProviderDto,
      address: providerAddress,
    });
    await provider.save();
    delete provider.password;
    return provider;
  }

  async findByEmail(email: string): Promise<Provider> {
    const provider = await Provider.findOne({
      where: {
        email: email,
      },
    });

    // if user was not found, then throw a not found exception
    if (!provider) {
      throw new NotFoundException(`Email not registered`);
    }

    return provider;
  }
}
