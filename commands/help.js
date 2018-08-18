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
        .addField("Staff Team", `**Embed** » -embed *message*\n **Poll** » -poll *question* | *answer1* | *answer2* `)
        .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor('RANDOM');

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help"
}
