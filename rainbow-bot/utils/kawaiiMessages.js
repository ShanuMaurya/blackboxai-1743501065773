module.exports = {
  getRandomMessage: () => {
    const messages = [
      "Kawaii desu ne~",
      "Nyaa~",
      "UwU",
      "Ohayou gozaimasu!",
      "Sugoi!",
      "Yatta!",
      "Hai!",
      "Ganbatte!",
      "Suki desu!",
      "Konnichiwa!",
      "Arigatou~",
      "Baka baka~",
      "Moe moe kyun!",
      "Chu~",
      "Senpai noticed me!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }
};