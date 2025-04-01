const { SlashCommandBuilder } = require('discord.js');
const base = require('./base');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('vc-deafen')
    .setDescription('Deafen a user in voice channel')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('User to deafen')
        .setRequired(true))
    .setDefaultMemberPermissions(base.vcPermissions[1]),

  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const member = interaction.guild.members.cache.get(user.id);
    
    if (!member.voice.channel) {
      return interaction.reply(`${user} is not in a voice channel!`);
    }

    await member.voice.setDeaf(true);
    return interaction.reply(`Deafened ${user} in voice channel!`);
  }
};