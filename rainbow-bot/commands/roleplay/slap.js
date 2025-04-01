const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { colors } = require('../../config.json');
const { getRandomMessage } = require('../../utils/kawaiiMessages');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('slap')
    .setDescription('Playfully slap another user')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to slap')
        .setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const embed = new EmbedBuilder()
      .setColor(colors.primary)
      .setDescription(`👋 ${interaction.user} playfully slapped ${user}! Baka~ ${getRandomMessage()}`)
      .setImage('https://i.imgur.com/Z7Dv8Pc.gif');

    await interaction.reply({ embeds: [embed] });
  }
};