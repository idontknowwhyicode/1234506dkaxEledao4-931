const Discord = require("discord.js")
let prefix = "-"



module.exports.run = async (bot, message, args) => {
    if (isCommand(message, "close")) {
    let channel = message.channel;
    let cName = channel.name;
    if(cName.startsWith("appeal-") || cName.startsWith("apply-") || cName.startsWith("ticket-")) {
        // Confirm delete - with timeout (Not command)
        message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '-confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
    } else message.reply("You can't use the close command outside of a ticket channel.");
function isCommand(message) {
    return message.content.toLowerCase().startsWith(prefix);
}

function isCommand(message, cmd) {
    return message.content.toLowerCase().startsWith(prefix + cmd);
}

}


module.exports.help = {
	name: "close"
}
