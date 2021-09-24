import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get()
  index() {
    return this.providersService.getAllProviders();
  }

  @Post()
  create(@Body() createProviderDto: CreateProviderDto) {
    console.log(createProviderDto);
    return this.providersService.create(createProviderDto);
  }
}
