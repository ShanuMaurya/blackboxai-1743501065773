const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.json');
const fs = require('fs');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST().setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
  .then(() => console.log(`✅ Successfully registered ${commands.length} commands`))
  .catch(console.error);