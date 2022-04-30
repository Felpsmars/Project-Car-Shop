import { model as createModel } from 'mongoose';
import GenericModel from './index';
import { Car } from '../interfaces/CarInterface';
import CarSchema from '../schema/CarSchema';

class CarModel extends GenericModel<Car> {
  constructor(model = createModel('Cars', CarSchema)) {
    super(model);
  }
}

export default CarModel; 