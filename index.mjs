import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


//imported functions
import { chips } from './mockbot-functions/chips.mjs';
import { badBone } from './mockbot-functions/badBone.mjs';
import { boi } from './mockbot-functions/datBoi.mjs';
import { bust } from './mockbot-functions/bust.mjs';
import { mockHelp } from './mockbot-functions/mock-help.mjs';
import { trash } from './mockbot-functions/trash.mjs';
import { larry } from './mockbot-functions/larry.mjs';
import { mimic } from './mockbot-functions/mimic.mjs';
import { mock } from './mockbot-functions/mock.mjs';
import { stealth } from './mockbot-functions/stealth.mjs';


//login token

import { loginToken } from './mockbot-functions/login-token.mjs'

//DB functions
import { connect } from './database/database.mjs'
import { saveMessageToDB } from './database/write_to_database.mjs';

function startDBAfterDiscordBot(){
  connect();
};

  //instert a valid discord bot token
client.login(loginToken);

client.once('ready', () => {
  console.log('Bot is ready!');
  client.user.setStatus('invisible')
  startDBAfterDiscordBot()
});
  //find the message when the bot is summoned. It is listening for commands in the if statements below.
client.on('messageCreate', (message) => {
  

  //mock 
  mock(message);

  //mimic. This command relies on the use of a database. 
  mimic(message);

  //image responses
  badBone(message);
  boi(message);
  bust(message);
  chips(message);
  trash(message);
  larry(message);

  //help 
  mockHelp(message);

  //write to DB

  const urlRegex = /https?:\/\/\S+/gi;

// Define a regular expression to match the ignore phrases
const ignoreRegex = /(!chips|!bad|!boi|!bust|!mock|!larry|!mimic|!trash|!mock-help)/;

// Ignore messages from bots, empty messages, urls, and the ignore phrases
if (message.author.bot || !message.content.trim() || urlRegex.test(message.content) || ignoreRegex.test(message.content)) {
  console.log('Not saved. Empty message, URL, bot message, or bot command.');
  
  return;
}

  else {saveMessageToDB(message.author.username, message.content, message.guild.name); }
    

});





