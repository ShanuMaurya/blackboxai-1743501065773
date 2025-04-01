require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const ytdl = require('ytdl-core');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, entersState, VoiceConnectionStatus } = require('@discordjs/voice');
const fs = require('fs');
const path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.GuildMember]
});

// Initialize music player
client.player = {
  queues: new Map(),
  audioPlayers: new Map(),
  
  async play(guildId, voiceChannel, song) {
    try {
      const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: guildId,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      });
      
      const audioPlayer = createAudioPlayer();
      const stream = ytdl(song.url, {
        filter: 'audioonly',
        quality: 'highestaudio',
        highWaterMark: 1 << 25,
        dlChunkSize: 0,
        requestOptions: {
          headers: {
            cookie: process.env.YT_COOKIE || ''
          }
        }
      }).on('error', error => {
        console.error('YouTube DL Error:', error);
      });
      
      const resource = createAudioResource(stream);
      audioPlayer.play(resource);
      connection.subscribe(audioPlayer);
      
      this.audioPlayers.set(guildId, audioPlayer);
      return audioPlayer;
    } catch (error) {
      console.error('Play error:', error);
      throw error;
    }
  }
};

// Load events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// Load command handler
require('./utils/commandHandler')(client);


// Login - Using token from environment variable
const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error('🌸 No Discord token found in environment variables');
  process.exit(1);
}

client.on('ready', () => {
  console.log(`🌸 ${client.user.tag} ready to spread sakura petals!`);
  
  // Set cute sakura-themed status
  client.user.setPresence({
    activities: [{
      name: '🌸 Sakura petals falling',
      type: 'WATCHING'
    }],
    status: 'online'
  });
});

client.login(token);
