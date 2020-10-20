function pingPong(message) {
  const content = message.content.toLocaleLowerCase();

  if (content === 'good bot') {
    message.reply(':)');
  }
}

module.exports = pingPong;
