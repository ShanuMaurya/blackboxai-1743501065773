const { SlashCommandBuilder } = require('discord.js');
const queueManager = require('../../utils/queueManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pause')
    .setDescription('Pauses the current song'),
  async execute(interaction) {
    const queue = queueManager.getQueue(interaction.guild.id);
    if (!queue.isPlaying) return interaction.reply('No music is playing!');
    
    queue.player.pause();
    return interaction.reply('⏸️ Paused the music');
  }
};