const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!embed {message}
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, you don't have permission.");
  let embedmessage = args.join(" ");
  let embedEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(embedmessage);
  message.delete().catch();
  message.channel.send(embedEmbed);

}

module.exports.help = {

  name: "embed"

}
