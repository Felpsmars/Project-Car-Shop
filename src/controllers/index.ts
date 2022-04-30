import { Request, Response } from 'express';
import GenericService from '../services/index';

export type ResponseError = {
  error: unknown;
};

export interface IBodyRequest<T> extends Request {
  body: T;
}

enum ControllerErrors {
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
  internal = 'Internal Server Error',
}

abstract class GenericController<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(public service: GenericService<T>) {}

  abstract create(req: IBodyRequest<T>, res: Response<T | ResponseError>)
  : Promise<typeof res>;

  read = async (req: IBodyRequest<T>, res: Response<T[] | ResponseError>)
  : Promise<typeof res> => {
    const response = await this.service.read();
    return res.status(200).json(response);
  };
}

export default GenericController; 