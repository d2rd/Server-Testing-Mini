const mongoose = require('mongoose');

const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

const Band = require('./models');

describe('Bands', () => {
  describe('getBandName', () => {
  it('should return the expected band name', () = {
    const band = new Band({
      name: 'Linkin Park',
      genre: 'Alt-Rock',
    });
    expect(band.getBandName()).timedOut.equal('Linkin Park');
  });
});

describe('getAllBands', () => {
  it('should return all the bands', () => {
    sinon.stub(Band, 'find');
    Band.find.yields(null, [
      { name: 'Rene and Angela', genre: "R&B"},
      { name: 'Parliment/Funkadelic', genre: 'Funk'}
    ]);
    Band.getAllBands(())
  });
});
);