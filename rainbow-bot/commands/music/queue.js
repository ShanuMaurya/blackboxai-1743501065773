const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const queueManager = require('../../utils/queueManager');

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('queue')
    .setDescription('Shows the current music queue'),
  async execute(interaction) {
    const queue = queueManager.getQueue(interaction.guild.id);
    
    if (queue.songs.length === 0) {
      return interaction.reply('The queue is empty!');
    }

    const embed = new EmbedBuilder()
      .setTitle('Music Queue')
      .setColor(0x1DB954);

    queue.songs.slice(0, 10).forEach((song, index) => {
      embed.addFields({
        name: `${index + 1}. ${song.songInfo.title}`,
        value: `Duration: ${formatTime(song.songInfo.duration)}`,
        inline: true
      });
    });

    if (queue.songs.length > 10) {
      embed.setFooter({ text: `And ${queue.songs.length - 10} more tracks...` });
    }

    return interaction.reply({ embeds: [embed] });
  }
};