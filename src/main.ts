import discord from "discord.js";
import codTest from "./warzone";

require("dotenv").config();

var client = new discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (msg) => {
  if (msg.content == "env?") {
    // msg.channel.send(process.env);
    msg.channel.send("Test response!");
  }
});

client.on("message", (msg) => {
  if (msg.content == "playerStats?") {
    // msg.channel.send(process.env);
    msg.channel.send(
      "Enter $playerStats and the activision ID of the player to see their warzone stats"
    );
    msg.channel.send("For example: $playerStats GulagLotion#5611289");
  }
});

client.on("message", async (msg) => {
  if (msg.content.startsWith("$playerStats")) {
    // catch user message, trim off $playerStats and stick it into a const

    const playerID = msg.content.substring(13);

    // msg.channel.send(playerID);

    const playerData = await codTest(playerID);
    console.log(JSON.stringify(playerData));
    //msg.channel.send(playerData);
  }
});

// This function takes in a token for the bot
client.login(process.env.DISCORD_TOKEN);
