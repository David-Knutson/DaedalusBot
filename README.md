# DaedalusBot

# Dev Guide

note: remember to run `tsc: watch - tsconfig.json` via the Terminal tab

There appears to be a rate limit for the call-of-duty api that will return an empty / undefined object when you try to return a player's stats

# Errors you may encounter

`msg.channel.send(process.env);` may result in a runtime error if you are running the bot locally
