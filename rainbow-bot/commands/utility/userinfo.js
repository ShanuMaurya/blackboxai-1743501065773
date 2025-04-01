const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Gets information about a user')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to look up')
        .setRequired(false)),
  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    const member = await interaction.guild.members.fetch(user.id);

    const embed = new EmbedBuilder()
      .setColor(member.displayColor || 0x1DB954)
      .setThumbnail(user.displayAvatarURL())
      .addFields(
        { name: 'Username', value: user.tag, inline: true },
        { name: 'ID', value: user.id, inline: true },
        { name: 'Joined Server', value: member.joinedAt.toDateString(), inline: true },
        { name: 'Account Created', value: user.createdAt.toDateString(), inline: true },
        { name: 'Roles', value: member.roles.cache.size.toString(), inline: true }
      );

    return interaction.reply({ embeds: [embed] });
  }
};