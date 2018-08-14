const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {
  let channel = message.channel;
  let cName = channel.name;

    let channelName = message.channel.name
    if(cName.startsWith("appeal-") || cName.startsWith("apply-") || cName.startsWith("ticket-")) {
      channel.delete();
    } else {
      return ("Are you sure its a ticket channel?")
    }

}


module.exports.help = {
	name: "close"
}
