import { z } from 'zod';

const VehicleSchema = z.object({
  model: z.string().min(3),
  color: z.string().min(3),
  buyValue: z.number().int(),
  status: z.boolean().optional(),
  year: z.number().min(1900),
});

export default VehicleSchema;