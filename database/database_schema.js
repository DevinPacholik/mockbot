const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  author: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  username: String,
  messages: [messageSchema]
});

const Message = mongoose.model('Message', messageSchema);
const User = mongoose.model('User', userSchema);
