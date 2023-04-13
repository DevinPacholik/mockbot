import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


//imported functions
import { mockHelp } from './mockbot-functions/mock-help.mjs';
import { trash } from './mockbot-functions/trash.mjs';
import { larry } from './mockbot-functions/larry.mjs';
import { mock } from './mockbot-functions/mock.mjs';

//login token

import { loginToken } from './mockbot-functions/login-token.mjs'

client.once('ready', () => {
  console.log('Bot is ready!');
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

});
//instert a valid discord bot token

client.login(loginToken);

