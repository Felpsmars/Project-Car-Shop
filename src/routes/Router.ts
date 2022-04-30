import { Router } from 'express';
import Controller from '../controllers';

class GenericRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: Controller<T>,
    route: string = controller.route,
  ) {
    this.router.post(route, controller.create);
    this.router.get(route, controller.read);
  }
}

export default GenericRouter; 