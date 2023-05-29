export function boi(message){
    const content = message.content.trim();
    const [command, target] = content.split(' ');
  
  
      if (command === '!boi') {
      message.reply('https://i.ytimg.com/vi/1O6-DpVpPhE/maxresdefault.jpg');
    }
  }