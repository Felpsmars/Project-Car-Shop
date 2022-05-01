import sinon from 'sinon';
import 'mocha';
import CarService from '../../../services/Car';
import { expect } from 'chai';
import { Car } from '../../../interfaces/CarInterface';

describe('CarService', () => {
  const car: Car = {
    model: 'Ferrari Maranello',
    year: 1963,
    color: 'red',
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2,
  };

  const mocked = {
    id: '4edd40c86762e0fb12000003',
    ...car,
  };

  const carService = new CarService();

  before(() => {
    sinon.stub(carService.model, 'create').resolves(mocked);
  });

  after(() => (carService.model.create as sinon.SinonStub).restore());

  it('Create method', async () => {
    const response = await carService.create(car);

    expect(response).to.be.deep.equal(mocked);
  });
});
