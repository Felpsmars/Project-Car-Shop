import { z } from 'zod';

import VehicleSchema from '../schema/VehicleSchema';

type Vehicle = z.infer<typeof VehicleSchema>;

export { VehicleSchema, Vehicle }; 