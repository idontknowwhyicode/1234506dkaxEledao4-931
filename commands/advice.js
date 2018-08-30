const request = require('request');

exports.run = (message, bot, send) => {
    let cn = request("http://api.adviceslip.com/advice", function (err, res, body) {
        try {
            let cnj = JSON.parse(body)
            message.channel.send(cnj.slip.advice)
        } catch (e) {
            return send("**Advice machine :b:roke**")
        }
    });
}

exports.conf = {
    userPerm: [],
    botPerm: ["SEND_MESSAGES"],
    coolDown: 0,
    dm: true,
    category: "Fun",
    help: "Need a little advice?",
    args: "",
}