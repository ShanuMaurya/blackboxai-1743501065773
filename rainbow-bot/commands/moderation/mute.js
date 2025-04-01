const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription('Mutes a member')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to mute')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('reason')
        .setDescription('Reason for muting'))
    .addIntegerOption(option =>
      option.setName('minutes')
        .setDescription('Duration in minutes (0 for permanent)')
        .setMinValue(0))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason') || 'No reason provided';
    const minutes = interaction.options.getInteger('minutes') || 0;
    const member = await interaction.guild.members.fetch(user.id);

    await member.timeout(minutes * 60 * 1000, reason);
    return interaction.reply(`🔇 Muted ${user.tag} ${minutes ? `for ${minutes} minutes` : 'permanently'} (Reason: ${reason})`);
  }
};