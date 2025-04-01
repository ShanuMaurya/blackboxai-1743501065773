const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { version } = require('../../../package.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Displays information about the bot'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x1DB954)
      .setTitle('Rainbow Bot Information')
      .setThumbnail(interaction.client.user.displayAvatarURL())
      .addFields(
        { name: 'Version', value: version, inline: true },
        { name: 'Library', value: 'discord.js v14', inline: true },
        { name: 'Uptime', value: formatUptime(process.uptime()), inline: true },
        { name: 'Commands', value: '17 total commands', inline: true },
        { name: 'Developer', value: 'YourNameHere', inline: true }
      );

    return interaction.reply({ embeds: [embed] });
  }
};

function formatUptime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor(seconds % 86400 / 3600);
  const mins = Math.floor(seconds % 3600 / 60);
  return `${days}d ${hours}h ${mins}m`;
}