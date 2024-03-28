require('./src/db');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { generateText } = require('./src/openAI');

const Message = require('./src/models/MessageModel');

const { fetchTripartiteSoul } = require('./src/fetchTripartiteSoul');
const { calculateTripartiteSoul } = require('./src/nlp/calculateTripartiteSoul');
const { updateTripartiteSoul } = require('./src/updateTripartiteSoul');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // Only allow requests from this origin
}));

// Get Messages
app.get('/messages', async (req, res) => {
  try {
    console.log('Fetching messages...');
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
});

// Post a Message
app.post('/messages', async (req, res) => {
  console.log("Received message:", req.body); // Log the received message
  const message = new Message(req.body);
  await message.save();
  console.log("Saved message:", message); // Log the saved message
  res.status(201).send(message);
});

// Delete all Messages
app.post('/reset-database', async (req, res) => {
  try {
    await Message.deleteMany({});
    res.status(200).send('Message data reset successfully.');
  } catch (error) {
    console.error('Error resetting Message data:', error);
    res.status(500).send('Failed to reset Message data.');
  }
});

// Open AI
app.post('/generate-text', async (req, res) => {
  console.log('Generating text is invoked: ', req.body);
  try {
    const prompt = req.body
    if (!prompt) {
      return res.status(400).send('Prompt is required.');
    }
    const completion = await generateText(prompt);
    console.log("Completion: " + JSON.stringify(completion));
    res.json(completion); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to generate text');
  }
});

// Calculate and Update Tripartite Table Given Message
app.post('/calc-tripartite', async (req, res) => {
  try {
    const { msg } = req.body;
    await calculateTripartiteSoul(msg);
    console.log('Completed tripartite recalculation')
    res.send('Sending over...Completed tripartite recalculation and update');
  } catch (error) {
    console.log(error);
    res.status(500).send('Failed to calculate and update tripartite table: ' + error.message);
  }
})

// Fetch Triparte Table
app.get('/fetch-tripartite', async (req, res) => {
  try {
    const soul = await fetchTripartiteSoul();
    res.json(soul); // Use res.json(soul) here to return the soul object
  } catch (error) {
    console.error(error);
    if (error.message === 'TripartiteSoul document not found.') {
      res.status(404).send(error.message);
    } else {
      res.status(500).send('Failed to fetch TripartiteSoul');
    }
  }
});

// Update tripartite table
app.post('/update-tripartite', async (req, res) => {
  try {
    console.log("Updating tripartite table: " + JSON.stringify(req.body))
    const soul = req.body; // Expecting { reason, spirit, eros }
    const updatedSoul = await updateTripartiteSoul(soul);
    res.json(updatedSoul);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
