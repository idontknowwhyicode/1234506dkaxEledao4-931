const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   let polllol = args.join(" ").split(' " ');
  if(!args[0]) return message.channel.send(`-poll "This is a poll?" "1" "2"`);

    let pollEmbed = new Discord.RichEmbed()
    .setDescription(`📊` + args[0])
    .addField(`1️⃣ + ${args[1]}`, `lol`)
    .setColor("#ffffff")
    .setTimestamp()
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");
	
    let poll = message.guild.channels.find("name", "poll");

    message.delete()
    poll.sendEmbed(pollEmbed).then(async function (message) {
		await message.react("1️⃣")
		await message.react("2️⃣")
    }).catch(function() {})

};


module.exports.help = {
  name: "poll"
}
