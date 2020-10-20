const getRandomInt = require('./../../lib/getRandomInt/');
const getWedYoutubeVideos = require('./../../lib/getWedYoutubeVideos/');
const log = require('./../../lib/logger');

async function checkIfWednesday(message) {
  const { content = message.content.toLocaleLowercase() } = message;

  log({
    level: 'debug',
    message: 'Checking if Wednesday',
    discordMsg: message,
  });

  if (message.author.username !== process.env.botName
      && content.indexOf('my dude') > -1
      && content.indexOf('wednesday') > -1) {
    const isWednesday = new Date().getDay() === 3;

    if (isWednesday) {
      log({
        level: 'debug',
        message: 'Checking if Wednesday',
        discordMsg: message,
      });

      const videoUrls = await getWedYoutubeVideos();
      const videoCount = videoUrls.length;
      const randomVideoIndex = getRandomInt(videoCount);
      const randomVideo = videoUrls[randomVideoIndex];

      message.reply(
        `it is Wednesday my dude! \n \n ₐₐₐₐaaaaaAAAAAAAÁ͔̤͔͍̳̔͠A̸̙͍̻̓̌ͥA̟̖ͧ́A̺͓͔̬͕͚͗̃͞A͇̰̣̅̐̔͗͢Āͦ̿A̗͙͉ͣ̚͟A͖̯͙͖͉̮͂͜ͅA̫̫̜̺͈ͯ̈̍ͦ͜Ä̭̲͖̼̙͈̣̣͌͢H̨̖̟̺͍͖̹̪ͣ͛ͫH̴͖̜ͧͮH̪̳̣͕̦̹̊͟ᴴ̴̖͕̤̰̬̘̆̔ͩ̔ᴴ̶͉̠͔̰̲̤͇͎̇͊ᴴ̨̞̖̘̔̓͒̏ \n  ${randomVideo}`,
      );
      log({
        level: 'debug',
        message: 'Checking if Wednesday',
        discordMsg: message,
      });
    } else {
      message.reply("it is NOT Wednesday my dude :(");
    }
  } else {
    log({
      level: 'debug',
      message: 'Ignoring message from myself',
      discordMsg: message,
    });
  }
}

module.exports = checkIfWednesday;
