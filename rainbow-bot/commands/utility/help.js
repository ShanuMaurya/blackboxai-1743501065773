const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows all available commands'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('🌸 Sakura Bot Commands 🌸')
      .setColor(0xFF9EB5)
      .setThumbnail('https://i.imgur.com/JQ7YV7s.png')
      .addFields(
        {
          name: '🎵 Music Commands (9)',
          value: '`/play` - Play a song\n`/skip` - Skip current song\n`/pause` - Pause playback\n`/resume` - Resume playback\n`/volume` - Adjust volume\n`/queue` - Show song queue\n`/nowplaying` - Current track info\n`/loop` - Toggle queue looping\n`/shuffle` - Shuffle the queue'
        },
        {
          name: '🛡️ Moderation Commands (5)',
          value: '`/kick` - Kick a member\n`/ban` - Ban a member\n`/mute` - Timeout a member\n`/warn` - Warn a member\n`/purge` - Delete messages'
        },
        {
          name: '🛠️ Utility Commands (5)',
          value: '`/help` - Shows this menu\n`/ping` - Checks bot latency\n`/userinfo` - User information\n`/serverinfo` - Server information\n`/avatar` - Get user avatar\n`/botinfo` - Bot information'
        }
      )
      .setFooter({ text: `Total commands: 19` });

    return interaction.reply({ embeds: [embed], ephemeral: true });
  }
};