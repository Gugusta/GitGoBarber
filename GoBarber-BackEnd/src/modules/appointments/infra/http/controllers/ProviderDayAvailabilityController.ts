import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayhAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, day, year } = request.query;

    const listProviderDayhAvailabilityService = container.resolve(
      ListProviderDayAvailabilityService
    );

    const availability = await listProviderDayhAvailabilityService.execute({
      provider_id,
      day: Number(day),
      month: Number(month),
      year: Number(year),
    });
    return response.json(availability);
  }
}
