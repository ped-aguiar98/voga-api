import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClientInterface } from './interfaces/client.interface';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('Client') private readonly ClientModel: Model<ClientInterface>,
  ) {}

  async findAll(): Promise<ClientInterface[]> {
    return await this.ClientModel.find();
  }

  async findOne(id: string): Promise<ClientInterface> {
    return await this.ClientModel.findOne({ _id: id });
  }

  async create(client: ClientInterface): Promise<ClientInterface> {
    const newClient = new this.ClientModel(client);
    return await newClient.save();
  }

  async update(id: string, client: ClientInterface): Promise<ClientInterface> {
    return await this.ClientModel.findByIdAndUpdate(id, client, { new: true });
  }

  async delete(id: string): Promise<ClientInterface> {
    return await this.ClientModel.findByIdAndRemove(id);
  }
}
