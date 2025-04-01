const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { colors } = require('../../config.json');
const { getRandomMessage } = require('../../utils/kawaiiMessages');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kiss')
    .setDescription('Kiss another user')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to kiss')
        .setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const embed = new EmbedBuilder()
      .setColor(colors.primary)
      .setDescription(`💋 ${interaction.user} kissed ${user}! Kawaii~ ${getRandomMessage()}`)
      .setImage('https://i.imgur.com/Yq7O8Uy.gif'); // Anime kiss gif

    await interaction.reply({ embeds: [embed] });
  }
};