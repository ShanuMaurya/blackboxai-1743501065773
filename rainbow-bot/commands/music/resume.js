const { SlashCommandBuilder } = require('discord.js'); 
const queueManager = require('../../utils/queueManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('resume')
    .setDescription('Resumes the paused song'),
  async execute(interaction) {
    const queue = queueManager.getQueue(interaction.guild.id);
    if (!queue.isPlaying) return interaction.reply('No music is paused!');
    
    queue.player.unpause();
    return interaction.reply('▶️ Resumed the music');
  }
};