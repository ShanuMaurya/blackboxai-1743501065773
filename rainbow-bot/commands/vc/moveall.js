const { SlashCommandBuilder, ChannelType } = require('discord.js');
const base = require('./base');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('vc-moveall')
    .setDescription('Move all users to another voice channel')
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('Target voice channel')
        .setRequired(true)
        .addChannelTypes(ChannelType.GuildVoice))
    .setDefaultMemberPermissions(base.vcPermissions[0]),

  async execute(interaction) {
    const targetChannel = interaction.options.getChannel('channel');
    const result = await base.handleAllMembers(interaction, 
      member => member.voice.setChannel(targetChannel)
    );
    return interaction.reply(result.includes('Applied') ? 
      `${result} to ${targetChannel.name}` : result);
  }
};