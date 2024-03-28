const TripartiteSoul = require('./models/TripartiteModel');

async function fetchTripartiteSoul() {
  try {
    const soul = await TripartiteSoul.findOne();
    if (!soul) {
      throw new Error('TripartiteSoul document not found.');
    }
    return soul; // Return the soul object directly
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch TripartiteSoul'); // Throw an error to be handled by the caller
  }
}

module.exports = { fetchTripartiteSoul };