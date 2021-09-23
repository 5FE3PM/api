import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientDto } from './dto/client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  index() {
    return this.clientsService.getAllClients();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.clientsService.getClientById(Number(id));
  }

  @Post()
  create(@Body() clientDto: ClientDto) {
    return this.clientsService.create(clientDto);
  }
}
