const mongoose = require('mongoose');
const { initializeTripartiteSoul } = require('./initializeTripartiteSoul');

mongoose.connect('mongodb://localhost:27017/philo-talk').then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We're connected to the database.");
  initializeTripartiteSoul();
});