require("dotenv").config();
const { Client } = require("discord.js");

const client = new Client();
const PREFIX = "$";

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in!`);
});

client.on("message", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    if (CMD_NAME === "kick") {
      if (!message.member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(
          "You do not have permissions to kick the user"
        );
      if (args.length === 0) return message.reply("Please Provide An ID");
      const member = message.guild.members.cache.get(args[0]);
      if (member) {
        try {
          const user = await member.kick();
          message.channel.send(`${user} was kicked!`);
        } catch (err) {
          message.channel.send(
            "I do not have permissions kick that user :(( sad sad "
          );
        }
      } else {
        message.channel.send("Member not in the server!");
      }
    } else if (CMD_NAME == "ban") {
      if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.send(
          "You do not have permissions to ban the user"
        );

      if (args.length === 0) return message.reply("Please Provide An ID");
      try {
        const user = await message.guild.members.ban(args[0]);
        message.channel.send("User Banned Succesfully");
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    }
  }

  console.log(`[${message.author.tag}]: ${message.content}`);
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
