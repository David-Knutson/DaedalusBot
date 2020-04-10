import discord from "discord.js";

require("dotenv").config();

var client = new discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (msg) => {
  if (msg.content == "ping") {
    msg.channel.send("pong");
  }
});

// This function takes in a token for the bot
client.login(process.env.DISCORD_TOKEN);
