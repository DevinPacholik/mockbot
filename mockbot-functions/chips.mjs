export function chips(message){
    const content = message.content.trim();
    const [command, target] = content.split(' ');
  
  
      if (command === '!chips') {
      message.reply('https://imgur.com/3z4gbQN');
    }
  }