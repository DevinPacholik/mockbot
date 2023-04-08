const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.on('messageCreate', (message) => {
  if (message.author.bot || !message.content.trim()) return; // Ignore messages from bots and empty messages
  console.log(`Received message: "${message.content}"`);

  const content = message.content.trim();
  const [command, target] = content.split(' ');

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

  if (command === '!trash' && target) {
    message.reply('https://cdn.discordapp.com/attachments/904964055993815114/1094131043080077342/30213609.png');
  }

  if (command === '!larry' && target) {
    message.reply('https://i.imgflip.com/g3ib1.jpg');
  }

  if (command === '!mock-help') {
    message.reply('```Fine, I GUESS I can help you... \n  !larry @username \n !mock @username \n !trash @username```');
  }

});

client.login('YOUR DISCORD BOT TOKEN GOES HERE');
