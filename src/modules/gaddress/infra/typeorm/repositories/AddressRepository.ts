import { getRepository, Repository } from 'typeorm';

import CreateAddressDTO from '@modules/gaddress/dtos/CreateAddressDTO';

import IAddressRepository from '@modules/gaddress/repositories/IAddressRepository';
import Address from '../entities/Address';

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async create({
    GUSERS_ID,
    STREET,
    NUMBER,
    DISTRICT,
    COMPLEMENT,
    CEP,
    CITY,
    STATE,
    COUNTRY,
  }: CreateAddressDTO): Promise<Address> {
    const address = this.ormRepository.create({
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
    await this.ormRepository.save(address);

    return address;
  }
}

export default AddressRepository;
