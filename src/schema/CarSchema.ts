import { Document, Schema } from 'mongoose';
import { Car } from '../interfaces/CarInterface';

interface CarDocument extends Car, Document {}

const CarSchema = new Schema<CarDocument>({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  seatsQty: Number,
  doorsQty: Number,
  buyValue: Number,
});

export default CarSchema;
