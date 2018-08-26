const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let cName = channel.name;
    if(!cName.startsWith("commands")) { 
        message.reply("You can't use -new here!")
        .then(msg => {
            msg.delete(5000)
          })
    }
    if(cName.startsWith("commands")) {

    if (message.guild.channels.exists("name", `appeal-${message.author.username.toLowerCase()}`)) return message.channel.send(`You already have a ticket open`);

    message.guild.createChannel(`appeal-${message.author.username}`, "text").then(c => {
        let category = message.guild.channels.find("name", "🎫 Tickets");
        if(category) {
            c.setParent(category)
             .then(updated => console.log(`Set the category of ${channel.name} to ${channel.parent.name}`))
            .catch(console.error);
           } else message.reply("Category not able to find.")
           .then(msg => {
            msg.delete(5000)
          })
        let role = message.guild.roles.find("name", "Appeal Team");
        let role2 = message.guild.roles.find("name", "@everyone");
	let role3 = message.guild.roles.find("name", "» Bots");


        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });

        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
	    
	c.overwritePermissions(role3, {
            SEND_MESSAGES: true,
            READ_MESSAGES: false
        });

        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });

        let logs =message.guild.channels.find(c => c.name === "logs");
        if(!logs){
            logs = message.guild.createChannel("logs", "text");
        }


        let logsembed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .addField(`Discord Console`,`${message.author} created a appeal ticket!\nTicket: ${c}`)
        .setTimestamp()
        .setFooter(`© Limit`, "https://imgur.com/KOA8OVl.png");

        let tcreateembed = new Discord.RichEmbed()
        .setTitle("Limit Ticket")
        .setColor(`#ffffff`)
        .addField(`New Ticket`,`${c}`)
        .addField(`How to go to my appeal ticket?`, `Click on ${c}`)
        .setTimestamp()
        .setFooter(`© Limit`, "https://imgur.com/KOA8OVl.png")
      
        logs.send(logsembed)
        message.channel.send({embed: tcreateembed});

        const embed = new Discord.RichEmbed()
        .setColor(`#ffffff`)
        .addField(`Hey ${message.author.username}!`, `Dear, ${message.author}\n\nThank you for reaching out to our appeal team!\nPlease appeal using the following format:\n\nWhat is your IGN? »\nWhy were you punished? »\nWho punished you? »\nWhy should we remove or reduce your punishment? »\nAny proof? »\n`)
        .setTimestamp()
        .setFooter(`© Limit`, "https://imgur.com/KOA8OVl.png")
        c.send({ embed: embed });


    })



}
}

module.exports.help = {
	name: "appeal"
}
