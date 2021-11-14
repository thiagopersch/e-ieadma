import { inject, injectable } from 'tsyringe';

import Address from '../infra/typeorm/entities/Address';

import IAddressRepository from '../repositories/IAddressRepository';

type CreateAddressRequest = {
  GUSERS_ID: string;
  STREET: string;
  NUMBER: string;
  DISTRICT: string;
  COMPLEMENT: string;
  CEP: string;
  CITY: string;
  STATE: string;
  COUNTRY: string;
};

@injectable()
class CreateAddressService {
  constructor(
    @inject('AddressRepository') private addressRepository: IAddressRepository,
  ) {}

  public async execute({
    GUSERS_ID,
    STREET,
    NUMBER,
    DISTRICT,
    COMPLEMENT,
    CEP,
    CITY,
    STATE,
    COUNTRY,
  }: CreateAddressRequest): Promise<Address> {
    const address = await this.addressRepository.create({
      GUSERS_ID,
      STREET,
      NUMBER,
      DISTRICT,
      COMPLEMENT,
      CEP,
      CITY,
      STATE,
      COUNTRY,
    });

    return address;
  }
}

export default CreateAddressService;
