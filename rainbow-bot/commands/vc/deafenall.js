const { SlashCommandBuilder } = require('discord.js');
const base = require('./base');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('vc-deafenall')
    .setDescription('Deafen all users in voice channel')
    .setDefaultMemberPermissions(base.vcPermissions[1]),

  async execute(interaction) {
    const result = await base.handleAllMembers(interaction, 
      member => member.voice.setDeaf(true)
    );
    return interaction.reply(result);
  }
};