const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription("Gets a user's avatar")
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user whose avatar you want')
        .setRequired(false)),
  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    const avatarURL = user.displayAvatarURL({ size: 1024 });

    const embed = new EmbedBuilder()
      .setColor(0x1DB954)
      .setTitle(`${user.username}'s Avatar`)
      .setImage(avatarURL)
      .setURL(avatarURL);

    return interaction.reply({ embeds: [embed] });
  }
};