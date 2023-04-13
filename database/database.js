const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://devinpacholik:wcKoJZ9Pv8KaQeMI@mockbot.qqhgmjp.mongodb.net/';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}

app.listen(8000, () => {
  console.log('Server started on port 8000');
});

connect();
