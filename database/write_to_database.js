const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model('Message', messageSchema);

async function saveMessageToDB(author, content) {
  const message = new Message({ author, content });
  try {
    await message.save();
    console.log('Message saved to database!');
  } catch (error) {
    console.log('Error saving message to database:', error);
  }
}

module.exports = { saveMessageToDB };
