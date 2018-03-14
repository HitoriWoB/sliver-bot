// Require Discord app
const Discord = require('discord.js');

// Configuration
const { prefix, token } = require('./config.json');

// Create new Discord client
const client = new Discord.Client();

// Triggers when bot connects / logs in
client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if(message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login(token);