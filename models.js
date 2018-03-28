const mongoose = require('mongoose');
const { Schema } = mongoose;

const BandSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
genere: {
  required: true,
  type: String,
}
});

BandSchema.methods.getBandName = function() {
  return this.name;
};

BandSchema.statics.getAllBands = (cb) => {
  Band.find({}, ())
}
module.exports = mongoose.model('Band', BandSchema);