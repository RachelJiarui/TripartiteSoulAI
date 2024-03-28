const TripartiteSoul = require('./models/TripartiteModel');

const initializeTripartiteSoul = async () => {
  const count = await TripartiteSoul.countDocuments();
  if (count === 0) {
    const defaultSoul = new TripartiteSoul({ reason: 0, spirit: 0, eros: 0 });
    await defaultSoul.save();
    console.log('Initialized the TripartiteSoul document');
  }
};

module.exports = { initializeTripartiteSoul };