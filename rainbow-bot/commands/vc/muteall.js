const { SlashCommandBuilder } = require('discord.js');
const base = require('./base');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('vc-muteall')
    .setDescription('Mute all users in voice channel')
    .setDefaultMemberPermissions(base.vcPermissions[0]),

  async execute(interaction) {
    const result = await base.handleAllMembers(interaction, 
      member => member.voice.setMute(true)
    );
    return interaction.reply(result);
  }
};