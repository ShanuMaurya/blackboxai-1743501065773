const { SlashCommandBuilder } = require('discord.js');
const queueManager = require('../../utils/queueManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('shuffle')
    .setDescription('Shuffles the current queue'),
  async execute(interaction) {
    const queue = queueManager.getQueue(interaction.guild.id);
    
    if (queue.songs.length <= 1) {
      return interaction.reply('Need at least 2 songs in queue to shuffle!');
    }

    // Keep current song playing
    const current = queue.songs.shift();
    for (let i = queue.songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue.songs[i], queue.songs[j]] = [queue.songs[j], queue.songs[i]];
    }
    queue.songs.unshift(current);

    return interaction.reply('🔀 Queue shuffled!');
  }
};