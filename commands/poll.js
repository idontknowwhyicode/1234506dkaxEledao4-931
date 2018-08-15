const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	
   let poll = message.guild.channels.find("name", "poll");

   let polls = args.join(" ").split("|");
   if(!args[0]) return message.channel.send(`-poll "This is a poll?" "1" "2"`);
    

    let pollEmbed = new Discord.RichEmbed()
    .setDescription(`:regional_indicator_a: ` + polls[1] + `\n:regional_indicator_b: ` + polls[2])
    .setColor("#ffffff")
    .setTimestamp()
    .setFooter(`© Limit`, "https://imgur.com/KOA8OVl.png");
	
    poll.send(`📊**` + polls[0] + `**`)
    poll.send(pollEmbed).then(async function (message) {
		await message.react("🇦")
		await message.react("🇧")
    }).catch(function() {})
};


module.exports.help = {
  name: "poll"
}
