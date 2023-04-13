 
export function larry(message){
  const content = message.content.trim();
  const [command, target] = content.split(' ');


    if (command === '!larry' && target) {
    message.reply('https://i.imgflip.com/g3ib1.jpg');
  }
}

