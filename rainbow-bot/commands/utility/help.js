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
          name: '💞 Roleplay Commands (5)',
          value: '`/hug` - Hug someone\n`/pat` - Pat someone\n`/kiss` - Kiss someone\n`/cuddle` - Cuddle someone\n`/slap` - Playful slap'
        },
        {
          name: '🔊 VC Commands (10)',
          value: '`/vc-disconnect` - Disconnect user\n`/vc-mute` - Mute user\n`/vc-unmute` - Unmute user\n`/vc-deafen` - Deafen user\n`/vc-undeafen` - Undeafen user\n`/vc-disconnectall` - Disconnect all\n`/vc-muteall` - Mute all\n`/vc-unmuteall` - Unmute all\n`/vc-deafenall` - Deafen all\n`/vc-undeafenall` - Undeafen all\n`/vc-moveall` - Move all'
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