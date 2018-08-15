const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   let polllol = args.join(" ").split("|").slice(3);
   if(!args[0]) return message.reply(`-poll "This is a poll?" "1" "2"`);
    
    message.channel.send(`📊` + args[0]){
    let pollEmbed = new Discord.RichEmbed()
    .addField(`:one:  ` + args[1], `:two: ` + args[2])
    .setColor("#ffffff")
    .setTimestamp()
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");
	
    let poll = message.guild.channels.find("name", "poll");

    poll.sendEmbed(pollEmbed).then(async function (message) {
		await message.react("1️⃣")
		await message.react("2️⃣")
    }).catch(function() {})
    }
};


module.exports.help = {
  name: "poll"
}
