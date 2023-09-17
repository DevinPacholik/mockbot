export function mock(message){
    if (message.author.bot || !message.content.trim()) return; // Ignore messages from bots and empty messages
console.log(`\nSent:\n${message.author.username}: ${message.content}\n${new Date().toString()}\n\n${message.guild.name}\n${message.channel.name}`);

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
}

