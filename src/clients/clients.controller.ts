import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientDto } from './dto/client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  index() {
    return this.clientsService.getAllClients();
  }

  @Post()
  create(@Body() clientDto: ClientDto) {
    return this.clientsService.create(clientDto);
  }
}
