const { SlashCommandBuilder } = require('discord.js');
const base = require('./base');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('vc-unmuteall')
    .setDescription('Unmute all users in voice channel')
    .setDefaultMemberPermissions(base.vcPermissions[0]),

  async execute(interaction) {
    const result = await base.handleAllMembers(interaction, 
      member => member.voice.setMute(false)
    );
    return interaction.reply(result);
  }
};