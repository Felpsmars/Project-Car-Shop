import { Model as M, Document } from 'mongoose';
import { IModel } from '../interfaces/ModelInterface';

abstract class GenericModel<T> implements IModel<T> {
  constructor(protected model: M<T & Document>) { }

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ id });

  update = async (str: string, obj: T): Promise<T | null> => {
    const updated = await this.model.updateOne({ id: str, obj });
    return updated.modifiedCount ? obj : null;
  };

  delete = async (str: string): Promise<T | null> => {
    const deleted = await this.model.deleteOne({ id: str });
    const finded = await this.model.findOne({ id: str });
    return deleted.deletedCount ? finded : null;
  };
}

export default GenericModel; 