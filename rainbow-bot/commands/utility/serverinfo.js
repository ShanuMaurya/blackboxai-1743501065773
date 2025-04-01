const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Displays server information'),
  async execute(interaction) {
    const guild = interaction.guild;

    const embed = new EmbedBuilder()
      .setColor(0x1DB954)
      .setThumbnail(guild.iconURL())
      .addFields(
        { name: 'Server Name', value: guild.name, inline: true },
        { name: 'Members', value: guild.memberCount.toString(), inline: true },
        { name: 'Created', value: guild.createdAt.toDateString(), inline: true },
        { name: 'Channels', value: guild.channels.cache.size.toString(), inline: true },
        { name: 'Roles', value: guild.roles.cache.size.toString(), inline: true },
        { name: 'Owner', value: (await guild.fetchOwner()).user.tag, inline: true }
      );

    return interaction.reply({ embeds: [embed] });
  }
};