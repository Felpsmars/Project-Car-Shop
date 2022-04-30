import { Request, Response } from 'express';
import { ServiceError } from '../services/index';
import { Car } from '../interfaces/CarInterface';
import CarService from '../services/Car';
import GenericController from '.';

export default class CarController extends GenericController<Car> {
  private $route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this.$route = route;
  }

  get route() { return this.$route; }

  create = async (req: Request, res: Response): Promise<Response> => {
    const created = await this.service.create(req.body);

    if ((created as ServiceError).error) {
      return res.status(400).json((created as ServiceError).error);
    }

    return res.status(201).json(created);
  };
}