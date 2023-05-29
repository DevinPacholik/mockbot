 export function bust(message){
    const content = message.content.trim();
    const [command, target] = content.split(' ');
  
  
      if (command === '!bust') {
      message.reply('https://imgur.com/ocAQBZI');
    }
  }