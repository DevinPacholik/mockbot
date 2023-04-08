const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log('Bot is ready!');
});


  //find the message when the bot is summoned. It is listening for commands in the if statements below.

client.on('messageCreate', (message) => {
  if (message.author.bot || !message.content.trim()) return; // Ignore messages from bots and empty messages
  console.log(`Received message: "${message.content}"`);

  const content = message.content.trim();
  const [command, target] = content.split(' ');

  //if the !mock command is used, it find the target person and takes their last message, turning it into alternating uppercase and lower case letters in a mocking fashion
  
  if (command === '!mock' && target) {
    const messages = Array.from(message.channel.messages.cache.values()).reverse().filter((msg) => msg.author.id === target.slice(2, -1));
    const lastMessage = messages[0];
    if (lastMessage) {
      const mockText = lastMessage.content
        .split('')
        .map((char, index) => {
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        .join('');
      console.log(`Mocked message: "${mockText}"`);
      message.reply(mockText);
    } else {
      message.reply('No message found to mock');
    }
  }

  //examples of image reponses. One is a Larry the Cable Guy meme cause that's an inside joke with my friends and the other is a trashcan.
  
  if (command === '!trash' && target) {
    message.reply('https://cdn.discordapp.com/attachments/904964055993815114/1094131043080077342/30213609.png');
  }

  if (command === '!larry' && target) {
    message.reply('https://i.imgflip.com/g3ib1.jpg');
  }

  //help instructions to show users how mockbot works
  if (command === '!mock-help') {
    message.reply('```Fine, I GUESS I can help you... \n  !larry @username \n !mock @username \n !trash @username```');
  }

});
//instert a valid discord bot token

client.login('YOUR DISCORD BOT TOKEN GOES HERE');
