const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Checks the bot's latency"),
  async execute(interaction) {
    const sent = await interaction.reply({ 
      content: 'Pinging...', 
      fetchReply: true,
      ephemeral: true
    });
    
    const latency = sent.createdTimestamp - interaction.createdTimestamp;
    const apiLatency = Math.round(interaction.client.ws.ping);
    
    return interaction.editReply(
      `🏓 Pong!\n` +
      `Bot Latency: ${latency}ms\n` +
      `API Latency: ${apiLatency}ms`
    );
  }
};