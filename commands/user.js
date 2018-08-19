const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let member = msg.mentions.members.first();
    if(!member) {
        msg.channel.send('Please mention a valid user.')
    }

    msg.channel.send({
        embed: {
            "title": "**User Stats**",
            "color": 16753920,
            "footer": {
                "text": "*Version: " + client.package.version + "*"
            },
            "thumbnail": {
                "url": "https://cdn.discordapp.com/attachments/473376205442121728/478875383601823744/Limit.png"
            },
            "fields": [{
                    "name": "Tag:",
                    "value": member.user.tag,
                    "inline": true
                },
                {
                    "name": "ID:",
                    "value": member.id,
                    "inline": true
                },
                {
                    "name": "Joined Discord:",
                    "value": moment(member.user.createdAt).format('LLL'),
                    "inline": true
                },
                {
                    "name": "Status:",
                    "value": member.presence.status,
                    "inline": true
                },
                //{
                    //"name": "Roles:",
                    //"value": msg.member.roles.array().toString(),
                    //"inline": true
                //},
                {
                    "name": "Joined Server:",
                    "value": moment(member.joinedAt).format('LLL'),
                    "inline": true
                }
            ]
            
        }
    });
}

module.exports.help = {
    name: "info"
}
