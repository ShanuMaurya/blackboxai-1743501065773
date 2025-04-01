const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('warn')
    .setDescription('Warns a member')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to warn')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('reason')
        .setDescription('Reason for warning')
        .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason');
    
    // In a real bot, you would log this to a database
    try {
      await user.send(`You've been warned in ${interaction.guild.name}: ${reason}`);
      return interaction.reply(`⚠️ Warned ${user.tag} (Reason: ${reason})`);
    } catch (err) {
      return interaction.reply(`⚠️ Warned ${user.tag} but couldn't DM them (Reason: ${reason})`);
    }
  }
};