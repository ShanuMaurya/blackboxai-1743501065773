const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  vcPermissions: [PermissionFlagsBits.MuteMembers, PermissionFlagsBits.DeafenMembers],
  
  getVoiceChannel(interaction) {
    const member = interaction.guild.members.cache.get(interaction.user.id);
    return member.voice.channel;
  },

  async handleAllMembers(interaction, action) {
    const voiceChannel = this.getVoiceChannel(interaction);
    if (!voiceChannel) return 'You must be in a voice channel!';

    const members = voiceChannel.members.filter(m => !m.user.bot);
    if (members.size === 0) return 'No members in voice channel!';

    members.forEach(member => action(member));
    return `Applied to ${members.size} members!`;
  }
};