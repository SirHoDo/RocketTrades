const simpleCommand = require("../../core/simpleCommand")

module.exports = new simpleCommand(
    async(message) => {
    try {
      const code = message.content.split(" ").slice(1).join(" ");
      let evaled = eval(code);
      
      if (!typeof evaled == "string") evaled = require("util").inspect(evaled);
      if (!evaled){
        evaled = "Missing result"
      }
      message.channel.send("Result:\n``" + evaled + "``");
    } catch (err) {
    console.log(err)
    }

    }, {
        name: "eval",
        aliases: ["eval"],
        cooldown: 0,
        cooldownMessage: "mmm",
        perms: ["SEND_MESSAGES"],
        description: "mmm",
        perms:["MANAGE_SERVER"],
        ownerOnly: true
    }
)