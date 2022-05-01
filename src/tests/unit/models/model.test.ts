import sinon from 'sinon';
import 'mocha';
import CarModel from '../../../models/Car';
import { expect } from 'chai';
import { Car } from '../../../interfaces/CarInterface';

describe('CarModel', () => {
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

  const carModel = new CarModel();

  before(() => {
    sinon.stub(carModel.model, 'create').resolves(mocked);
  });

  after(() => {
    (carModel.model.create as sinon.SinonStub).restore();
  });

  it('Create method', async () => {
    const response = await carModel.create(car);

    expect(response).to.deep.equal(mocked);
  });
});
