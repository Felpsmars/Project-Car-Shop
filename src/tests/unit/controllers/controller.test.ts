import chai from 'chai';
import sinon from 'sinon';
import 'mocha';
import chaiHttp = require('chai-http');
import CarModel from '../../../models/Car';
import server from '../../../server';
import { Car } from '../../../interfaces/CarInterface';

chai.use(chaiHttp);

const { expect } = chai;

describe('CarController', () => {
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

  let chaiHttpResponse;
  const carModel = new CarModel();

  describe('Post route /cars', () => {
    before(() => {
      sinon.stub(carModel.model, 'create').resolves(mocked);
    });

    after(() => {
      (carModel.model.create as sinon.SinonStub).restore();
    });

    it('returns status 201 and his object if validated', async () => {
      chaiHttpResponse = await chai.request(server.app).post('/cars').send(car);

      expect(chaiHttpResponse.body).to.deep.equal(mocked);
      expect(chaiHttpResponse.status).to.equal(201);
    });
  });
});
