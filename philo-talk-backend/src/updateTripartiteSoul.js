const TripartiteSoul = require('./models/TripartiteModel');

async function updateTripartiteSoul(soul) {
  try {
    const { reason, spirit, eros } = soul;
    const updated = await TripartiteSoul.findOneAndUpdate({}, { reason, spirit, eros }, { new: true, upsert: true });
    console.log("Updated tripartite soul");

    if (!updated) {
      throw new Error('TripartiteSoul document not found.');
    }

    return updated;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update TripartiteSoul');
  }
};

module.exports = { updateTripartiteSoul };