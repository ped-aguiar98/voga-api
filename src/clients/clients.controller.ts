import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { ClientInterface } from './interfaces/client.interface';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Get('/users')
  findAll(): Promise<ClientInterface[]> {
    return this.clientsService.findAll();
  }
  @Get('/users/:id')
  findOne(@Param('id') id): Promise<ClientInterface> {
    return this.clientsService.findOne(id);
  }

  @Post('/add_user')
  create(@Body() createClientDto: CreateClientDto): Promise<ClientInterface> {
    return this.clientsService.create(createClientDto);
  }

  @Put('/edit_user/:id')
  update(
    @Body() updateItemDto: CreateClientDto,
    @Param('id') id,
  ): Promise<ClientInterface> {
    return this.clientsService.update(id, updateItemDto);
  }

  @Delete('/delete_user/:id')
  delete(@Param('id') id): Promise<ClientInterface> {
    return this.clientsService.delete(id);
  }
}
