const Discord = require("discord.js");
const client = new Discord.Client();
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("583623939503292426");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**__W__elcome __T__o __D__ark__S__ide :Up_Logo: __P__rove __Y__our __S__elf __I__n #lobby :_Heart: **`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
