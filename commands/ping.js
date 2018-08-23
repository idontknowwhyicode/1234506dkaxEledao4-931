exports.run = (client, message) => {
  message.channel.send(`My ping is: ${Date.now() - message.createdTimestamp}ms right now!`);
}
