const fs = require("fs")
const botconfig = require("./botconfig.json")
const Discord = require("discord.js")
const bot = new Discord.Client({fetchAllMembers: true})


bot.commands = new Discord.Collection()
let prefix = botconfig.prefix



fs.readdir("./commands/", (err, files) => {
	if(err) console.log(err) 

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("No commands folder.")
		return
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`)
		console.log(`${i + 1}: ${f} loaddded!`)
		bot.commands.set(props.help.name,props)
	})

})

process.on("error", console.error)
bot.on("ready", async () => {
    console.log(`${bot.user.username} is now online!`)
	bot.user.setActivity("on limit.rip | store.limit.rip 🎉", {type: "PLAYING"});
	
})
bot.on("message", async message => {

    if (!message.content.startsWith(prefix)) return


	let messageArray = message.content.split(" ")
	let cmd = messageArray[0]
	let args = messageArray.slice(1)
	let commandFile = bot.commands.get(cmd.slice(prefix.length))
    if(commandFile) commandFile.run(bot, message, args)
})

client.on("guildMemberAdd", (member) => {
  let role = member.guild.roles.find("name", "Member");
  member.addRole(role)
    .catch(console.log)
  member.guild.channels.get("440769735596965908").send({
    embed: {
      "color": 16753920,
      "title": "**New User!**",
      "description": "         <@" + member.user.id + "> Welcome to » Limit | Network «",
      "footer": {
        "text": "© Limit | Network"
      },
    }
  });
});
bot.login(process.env.BOT_TOKEN);
