"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
require("dotenv").config();
var client = new discord_js_1.default.Client();
client.on("ready", () => {
    console.log("I am ready!");
});
client.on("message", (msg) => {
    if (msg.content == "ass") {
        msg.channel.send("titties");
    }
    else {
        if (msg.content == "2 asses") {
            msg.channel.send("4 titties");
        }
        else {
            if (msg.content == "ass ass") {
                msg.channel.send("titties titties");
            }
            else {
                if (msg.content == "ass and") {
                    msg.channel.send("titties");
                }
            }
        }
    }
});
client.on("message", (msg) => {
    if (msg.content == "officer that's not ours") {
        msg.channel.send("CANDY BARS!");
    }
});
client.on("message", (msg) => {
    if (msg.content == "warzone?") {
        msg.channel.send("It's time for some truckin n fuckin boiz!");
    }
});
// This function takes in a token for the bot
client.login(process.env.DISCORD_TOKEN);
