const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { colors } = require('../../config.json');
const { getRandomMessage } = require('../../utils/kawaiiMessages');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cuddle')
    .setDescription('Cuddle with another user')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to cuddle')
        .setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const embed = new EmbedBuilder()
      .setColor(colors.primary)
      .setDescription(`🌸 ${interaction.user} cuddled with ${user}! So warm~ ${getRandomMessage()}`)
      .setImage('https://i.imgur.com/V4NpgbG.gif'); // Anime cuddle gif

    await interaction.reply({ embeds: [embed] });
  }
};