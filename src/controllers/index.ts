import { Request, Response } from 'express';
import GenericService from '../services/index';

export type ResponseError = {
  error: unknown;
};

export interface IRequestWithBody<T> extends Request {
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

  abstract create(
    req: IRequestWithBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;
}

export default GenericController; 