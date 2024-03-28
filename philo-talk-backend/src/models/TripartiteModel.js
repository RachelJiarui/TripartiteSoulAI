const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripartiteSchema = new Schema({
  reason: Number,
  spirit: Number,
  eros: Number
});

const TripartiteSoul = mongoose.model('TripartiteSoul', tripartiteSchema);

module.exports = TripartiteSoul;
