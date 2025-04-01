const { EmbedBuilder } = require('discord.js');

module.exports = {
  handleError(interaction, error) {
    console.error('❌ Error:', error);
    
    const embed = new EmbedBuilder()
      .setTitle('🌸 ごめんなさい! An Error Occurred')
      .setDescription(`\`\`\`${error.message.substring(0, 1000)}\`\`\``)
      .setColor(0xFF9EB5)
      .setFooter({ text: 'Please try again later' });

    if (interaction.deferred || interaction.replied) {
      return interaction.followUp({ embeds: [embed], ephemeral: true });
    }
    return interaction.reply({ embeds: [embed], ephemeral: true });
  }
};