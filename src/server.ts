import App from './app';
import GenericRouter from './routes/Router';

import CarController from './controllers/Car';
import { Car } from './interfaces/CarInterface';

const server = new App();

const carRouter = new GenericRouter<Car>();
const carController = new CarController();

server.addRouter(carRouter.router);
carRouter.addRoute(carController);

export default server;