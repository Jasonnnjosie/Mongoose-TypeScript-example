import mongoose from 'mongoose';
import Pet, { IPet } from '../models/pet.model';

async function CreatePet({
  owner,
  name
}: {
  owner: mongoose.Schema.Types.ObjectId;
  name: string;
}): Promise<IPet> {
  return await Pet.create({
    owner,
    name
  })
    .then((data: IPet) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  CreatePet
};
