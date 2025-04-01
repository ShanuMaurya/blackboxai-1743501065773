const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { colors } = require('../../config.json');
const { getRandomMessage } = require('../../utils/kawaiiMessages');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hug')
    .setDescription('Hug another user')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to hug')
        .setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const embed = new EmbedBuilder()
      .setColor(colors.primary)
      .setDescription(`🌸 ${interaction.user} hugged ${user}! ${getRandomMessage()}`)
      .setImage('https://i.imgur.com/r9aU2xv.gif'); // Sakura hug gif

    await interaction.reply({ embeds: [embed] });
  }
};