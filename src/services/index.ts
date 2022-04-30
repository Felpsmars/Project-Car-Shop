import { ZodError } from 'zod';
import { IModel } from '../interfaces/ModelInterface';

export interface ServiceError {
  error: ZodError;
}

abstract class GenericService<T> {
  constructor(protected model: IModel<T>) { }

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    return this.model.readOne(id);
  }

  public async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }
}

export default GenericService; 

// git add src/interfaces/CarInterface.ts src/interfaces/VehicleInterface.ts src/models/index.ts src/models/CarModel.ts src/