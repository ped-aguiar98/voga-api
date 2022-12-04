/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
});
