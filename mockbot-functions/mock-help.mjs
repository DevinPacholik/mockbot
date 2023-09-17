  //help instructions to show users how mockbot works

  export function mockHelp(message){
    const content = message.content.trim();
    const [command, target] = content.split(' ');
  

      if (command === '!mock-help') {
    message.reply('```Fine, I GUESS I can help you... \n !chips \n !larry @username \n !mock @username \n !trash @username \n !bad \n !boi \n !bust```');
  }
  }

