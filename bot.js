const Discord = require("discord.js");
const client = new Discord.Client();
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("583623939503292426");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome To Darkside :leaves:  **`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
