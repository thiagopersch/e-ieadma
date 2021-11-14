import CreateAddressDTO from '../dtos/CreateAddressDTO';

import Address from '../infra/typeorm/entities/Address';

export default interface IAddressRepository {
  create: (data: CreateAddressDTO) => Promise<Address>;
}
