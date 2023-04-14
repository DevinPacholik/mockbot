# mockbot
This is a Discord bot to mock your friends.

The commands it has in this template include:

!mock @username - Takes the last message a user sent and converts it to alternating uppercase and lowercase letters in a mocking fashion

!larry @username - Sends a photo of Larry the Cable Guy insisting something is funny

!trash @username - Sends a photo of a trashcan at the user mentioned

!mock-help - Lists all the mockbot commands

This Discord bot built using Node.js and the Discord.js library. The bot is designed to respond to certain commands and messages within a Discord server, and can perform a variety of actions such as sending messages, posting images, and providing help.

The bot is initialized using the Discord.js Client class, and is configured to listen for certain Discord events using client.on(). The code imports several functions from other files in the project, including mock(), trash(), larry(), and mockHelp(), which are responsible for handling different types of messages and commands.

The bot requires a valid Discord bot token to authenticate with the Discord API, which is stored in a separate file and imported using import { loginToken } from './mockbot-functions/login-token.mjs'.

This bot also connects to MongoDB using the mongoose library, allowing it to store and retrieve data from a database.

Overall, this code provides the foundation for a basic Discord bot and can be expanded upon to add additional functionality and features.

To run this code, it is necessary to have Node.js and the Discord.js library installed on your machine.

To install Node.js, you can visit the official Node.js website and download the appropriate version for your operating system.

To install Discord.js, you can use the Node Package Manager (npm) by opening a command prompt or terminal and running the following command:

npm install discord.js

It's important to make sure that you are installing the correct version of Discord.js that matches the version of Node.js you have installed, otherwise the bot may not function correctly.

Once you have Node.js and Discord.js installed, you can run the bot code by navigating to the project directory in your command prompt or terminal and running the following command:

node index.mjs

This will start the bot and connect it to the Discord API.
