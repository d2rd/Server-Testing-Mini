const mongoose = require('mongoose');

const chai = require('chai');
const chaihttp = require('chai-http');
const { expect } = chai;
const sinon = require('sinon');

const server = require('./server');
chai.use(chaihttp);

const Band = require('./models/');

//POST test
describe('Server', () => {
  describe('[POST] /band', () => {
    const newBand = {
      name: 'Doobe Brothers',
      genre: 'Alt-Rock',
    };
    chai.request(server)
      .post('/band')
      .send(newBand)
      .end((err, res) => {
        if (err) console.error(err);
        expect(res.status).to.equal(404);
        expect(res.body.name.toequal('Doobe Brothers'));
      })
  })
})

//GET test
describe('Server', () => {
  describe('[POST] /band', () => {
    const newBand = {
      name: 'Doobe Brothers',
      genre: 'Alt-Rock',
    };
    chai.request(server)
      .post('/band')
      .send(newBand)
      .end((err, res) => {
        if (err) console.error(err);
        expect(res.status).to.equal(404);
        expect(res.body.name.toequal('Doobe Brothers'));
      })
  })
})