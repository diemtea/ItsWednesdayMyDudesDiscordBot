const schedule = require('node-schedule');

const getRandomInt = require('./../../lib/getRandomInt');
const getWedYoutubeVideos = require('./../../lib/getWedYoutubeVideos');
const Webhook = require('./../../lib/classes/Webhook');

/**
 * Sends a message and a video through a webhook
 * every Wednesday, and also updates status
 */
function postOnWednesday() {
  const hook = new Webhook();
  const Discord = require('discord.js');
  const client = new Discord.Client();
  schedule.scheduleJob({ hour: 0, minute: 0, dayOfWeek: 3 }, async () => {
    const videoUrls = await getWedYoutubeVideos();
    const randomInt = getRandomInt(videoUrls.length);
    const randomVideo = videoUrls[randomInt];
    hook.sendMessage(`it is Wednesday my dudes! \n \n ₐₐₐₐaaaaaAAAAAAAÁ͔̤͔͍̳̔͠A̸̙͍̻̓̌ͥA̟̖ͧ́A̺͓͔̬͕͚͗̃͞A͇̰̣̅̐̔͗͢Āͦ̿A̗͙͉ͣ̚͟A͖̯͙͖͉̮͂͜ͅA̫̫̜̺͈ͯ̈̍ͦ͜Ä̭̲͖̼̙͈̣̣͌͢H̨̖̟̺͍͖̹̪ͣ͛ͫH̴͖̜ͧͮH̪̳̣͕̦̹̊͟ᴴ̴̖͕̤̰̬̘̆̔ͩ̔ᴴ̶͉̠͔̰̲̤͇͎̇͊ᴴ̨̞̖̘̔̓͒̏ \n  ${randomVideo}`);
    client.user.setPresence({
      status: "online",
      game: {
        name: "W E D N E S D A Y  L O F I  V I B E S",
        type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
      }
    });  
  });
}

module.exports = postOnWednesday;
