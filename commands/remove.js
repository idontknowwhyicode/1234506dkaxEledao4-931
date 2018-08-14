const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let cName = channel.name;
    if(cName.startsWith("appeal-") || cName.startsWith("apply-") || cName.startsWith("ticket-")) {

        let user = message.mentions.users.first();
        if(user) {

            let addembed = new Discord.RichEmbed()
            .setTitle("❌ User Removed!")
            .setColor("#ff0000")
            .setDescription(`Player Name: ${user}`)
            .setTimestamp()
            .setFooter(`© Limit`, "https://imgur.com/KOA8OVl.png");
            
            message.delete()
            message.channel.send({embed: addembed});

        channel.overwritePermissions(user, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
} else message.channel.send("Tag a user: _example: -remove Jimmyy#7622_!");
      } else message.reply("You can only remove players in tickets.");

}

module.exports.help = {
    name: "remove"
}
