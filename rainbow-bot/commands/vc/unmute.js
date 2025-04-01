const { SlashCommandBuilder } = require('discord.js');
const base = require('./base');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('vc-unmute')
    .setDescription('Unmute a user in voice channel')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('User to unmute')
        .setRequired(true))
    .setDefaultMemberPermissions(base.vcPermissions[0]),

  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const member = interaction.guild.members.cache.get(user.id);
    
    if (!member.voice.channel) {
      return interaction.reply(`${user} is not in a voice channel!`);
    }

    await member.voice.setMute(false);
    return interaction.reply(`Unmuted ${user} in voice channel!`);
  }
};