const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { colors } = require('../../config.json');
const { getRandomMessage } = require('../../utils/kawaiiMessages');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pat')
    .setDescription('Pat another user')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to pat')
        .setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const embed = new EmbedBuilder()
      .setColor(colors.primary)
      .setDescription(`🌸 ${interaction.user} gently patted ${user}! ${getRandomMessage()}`)
      .setImage('https://i.imgur.com/JQ7YV7s.gif'); // Cute pat gif

    await interaction.reply({ embeds: [embed] });
  }
};