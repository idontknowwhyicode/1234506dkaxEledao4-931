const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let cName = channel.name;
    if(cName.startsWith("appeal-") || cName.startsWith("apply-") || cName.startsWith("ticket-") || cName.startsWith("suggestion-") || cName.startsWith("management-")) {

        let user = message.mentions.users.first();
        if(user) {

            let addembed = new Discord.RichEmbed()
            .setTitle("✅ User Added!")
            .setColor("#ffffff")
            .setDescription(`Player name: ${user}`)
            .setTimestamp()
            .setFooter(`© Limit`, "https://imgur.com/KOA8OVl.png");
            message.delete()
            message.channel.send({embed: addembed});

        channel.overwritePermissions(user, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
} else message.channel.send("Tag a user: _example: `-add @mack#9928`!");
      } else message.reply("You can only add players in tickets.");

}

module.exports.help = {
    name: "add"
}
