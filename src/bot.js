require("dotenv").config();
const { Client } = require("discord.js");

const client = new Client();
const PREFIX = "$";

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in!`);
});

client.on("message", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    if(CMD_NAME === "kick"){
        message.channel.send("Kicked the user"); 
    }
    console.log(CMD_NAME);
    console.log(args);
  }

  

  console.log(`[${message.author.tag}]: ${message.content}`);
  if (message.content === "bachhi") {
    message.reply("bacchhhhaaaaaaaaaa");
  }
  if (message.content === "baccha") {
    message.reply("bacchhhhhhhhhiiiiiiiiiiiiiiiiii");
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
