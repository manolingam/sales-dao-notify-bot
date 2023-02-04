const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const { SECRETS } = require('./config');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

const eventFiles = fs
  .readdirSync('./events')
  .filter((file) => file.endsWith('.js'));
eventFiles.forEach((file) => {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
});

client.login(SECRETS.TOKEN);
