import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAddressService from '@modules/gaddress/services/CreateAddressService';

class AddressController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      GUSERS_ID,
      STREET,
      NUMBER,
      DISTRICT,
      COMPLEMENT,
      CEP,
      CITY,
      STATE,
      COUNTRY,
    } = request.body;

    const createAddress = container.resolve(CreateAddressService);

    const address = await createAddress.execute({
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

    return response.json(address);
  }
}

export default AddressController;
