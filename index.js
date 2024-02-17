const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord

const status = await client.user.setPresence({ 
    status: 'idle', 
    activities: [{
        type: ActivityType.Custom,
        name: 'customname',
        status: '/stripped'
    }]
))


/*const status = await client.user.setActivity
    type: ActivityType.Custom,
    name: '/stripped',
    state: '/stripped'
}); 

console.log(JSON.stringify(status)): 
