const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows all available commands'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('Rainbow Bot Commands')
      .setColor(0x1DB954)
      .addFields(
        {
          name: '🎵 Music Commands',
          value: '`/play` - Play a song\n`/skip` - Skip current song\n`/pause` - Pause playback\n`/resume` - Resume playback\n`/volume` - Adjust volume\n`/queue` - Show song queue\n`/nowplaying` - Current track info\n`/loop` - Toggle queue looping\n`/shuffle` - Shuffle the queue'
        },
        {
          name: '🛡️ Moderation Commands',
          value: '`/kick` - Kick a member\n`/ban` - Ban a member\n`/mute` - Timeout a member\n`/warn` - Warn a member\n`/purge` - Delete messages'
        }
      );

    return interaction.reply({ embeds: [embed], ephemeral: true });
  }
};