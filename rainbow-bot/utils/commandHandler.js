const fs = require('fs');
const path = require('path');

module.exports = (client) => {
  if (!client.commands) client.commands = new (require('discord.js')).Collection();
  const commandsPath = path.join(__dirname, '../commands');
  const commandFiles = getAllFiles(commandsPath).filter(file => file.endsWith('.js'));

  function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      } else if (file.endsWith('.js')) {
        arrayOfFiles.push(fullPath);
      }
    });
    
    return arrayOfFiles;
  }

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
  }
};