const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!embed {message}
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Yeah, that isn't going to happen.");
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
