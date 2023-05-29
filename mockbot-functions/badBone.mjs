export function badBone(message){
    const content = message.content.trim();
    const [command, target] = content.split(' ');
  
  
      if (command === '!bad') {
      message.reply('https://imgur.com/vPCI9wX');
    }
  }