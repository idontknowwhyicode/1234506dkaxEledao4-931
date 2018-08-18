const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Default Prefix", `-`)
        .addField("Support", `**New Ticket** » -new <reason> \n**Close Ticket**  » -close \n**Add User to ticket**  » -add <user#0000> \n**Remove User from ticket**  » -remove <user#0000>`)
        .addBlankField()
        .addField("Staff Team", `**Server Info :** It wil show the server's info\n<prefix><serverinfo>\n**User Info : ** It will show you the bot's information\n<prefix><userinfo>\n**Bot Info :** it will show you the bot's information\n<prefix><serverinfo>\n** Lockdown :** it will lockdown any channel as long as the bot has the proper permissions\n<prefix><lockdown hh-mm-ss>\n if you wish to unlock the channel before the cooldown is done you could do **<prefix><lockdown release or unlock** `)
        .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor('RANDOM');

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help"
}
