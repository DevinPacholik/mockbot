import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


//imported functions
import { mockHelp } from './mockbot-functions/mock-help.mjs';
import { trash } from './mockbot-functions/trash.mjs';
import { larry } from './mockbot-functions/larry.mjs';
import { mock } from './mockbot-functions/mock.mjs';

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
  startDBAfterDiscordBot()
});


  //find the message when the bot is summoned. It is listening for commands in the if statements below.
client.on('messageCreate', (message) => {

  //mock 
  mock(message);

  //image responses
  trash(message);
  larry(message);

  //help 
  mockHelp(message);

  //write to DB

   // Ignore messages from bots and empty messages
  if (message.author.bot || !message.content.trim()) {
    console.log ('DB write error. Empty message or bot message.')
    return; } 

  else {saveMessageToDB(message.author.username, message); }
    

});





