//examples of image reponses. One is a Larry the Cable Guy meme cause that's an inside joke with my friends and the other is a trashcan.


export function trash(message) {
  const content = message.content.trim();
  const [command, target] = content.split(' ');


  if (command === '!trash' && target) {
    message.reply('https://cdn.discordapp.com/attachments/904964055993815114/1094131043080077342/30213609.png');
  }

}
