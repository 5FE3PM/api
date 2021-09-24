import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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
    try {
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
    } catch (error) {
      if (error.errno == 1062) {
        throw new ConflictException(
          `Email ${createProviderDto.email} is already in use`,
        );
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
