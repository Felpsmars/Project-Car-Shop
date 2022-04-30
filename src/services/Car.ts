import GenericService, { ServiceError } from './index';
import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/Car';

class CarService extends GenericService<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (car: Car) : Promise<Car | ServiceError | null> => {
    const parsedCar = CarSchema.safeParse(car);
    if (!parsedCar.success) return { error: parsedCar.error };

    return this.model.create(car);
  };
}

export default CarService; 