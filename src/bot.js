const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

const Middleware = require('./middleware/Middleware');

const startJobs = require('./jobs/');
const checkIfWednesday = require('./middleware/checkIfWednesday/');
const getWedYoutubeVideo = require('./middleware/getWedYoutubeVideo/');
const pingPong = require('./middleware/pingPong/');

const botMiddleware = new Middleware();

client.on('ready', () => {
  console.log(`Started on: ${new Date()}`);
  
  //set default status for bot
  client.user.setPresence({
    status: "idle",
    game: {
        name: "lofi beats to cure my depression",
        type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
    }
  });
  
  startJobs();
  botMiddleware.add(checkIfWednesday);
  botMiddleware.add(getWedYoutubeVideo);
  botMiddleware.add(pingPong);
});

client.on('message', (message) => {
  botMiddleware.run(message);
});

client.login(process.env.token);
