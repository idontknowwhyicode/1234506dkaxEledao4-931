const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	
   let poll = message.guild.channels.find("name", "poll");

   let polls = args.join(" ").split("|");
   if(!args[0]) return message.channel.send(`-poll "This is a poll?" "1" "2"`);
    

    let pollEmbed = new Discord.RichEmbed()
    .addField(`\n:one:  ` + polls[1], `:two: ` + polls[2])
    .setColor("#ffffff")
    .setTimestamp()
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");
	
    poll.send(`📊**` + polls[0] + `**`)
    poll.send(pollEmbed).then(async function (message) {
		await message.react("1️⃣")
		await message.react("2️⃣")
    }).catch(function() {})
};


module.exports.help = {
  name: "poll"
}
