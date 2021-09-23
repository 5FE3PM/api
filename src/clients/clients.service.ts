import { Injectable, NotFoundException } from '@nestjs/common';
import { Address } from 'src/address/address.entity';
import { Client } from './client.entity';
import { ClientDto } from './dto/client.dto';

@Injectable()
export class ClientsService {
  async getAllClients(): Promise<Client[]> {
    let clients = await Client.find({ relations: ['address'] });
    clients = clients.map((client: Client) => {
      delete client.password;
      return client;
    });
    return clients;
  }

  async getClientById(id: number) {
    const client = await Client.findOne(id, { relations: ['address'] });
    if (!client) {
      throw new NotFoundException();
    }
    delete client.password;
    return client;
  }

  async create(clientDto: ClientDto): Promise<Client> {
    const clientAddress = Address.create({
      street: clientDto.street,
      subdivision: clientDto.subdivision,
      region: clientDto.region,
    });
    await clientAddress.save();
    const client = Client.create({ ...clientDto, address: clientAddress });
    await client.save();
    delete client.password;
    return client;
  }
}
