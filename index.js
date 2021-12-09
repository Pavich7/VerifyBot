const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'YOUR_TOKEN';

bot.on('message' , msg=>{
    if(msg.content ===  "!verify"){
        const embed = new Discord.MessageEmbed()
            .setTitle("✅ **Verified!**")
            .setDescription("You have been verified!")
        let role = msg.guild.roles.cache.get("YOUR_ROLE_ID");
        msg.member.roles.add(role);
        msg.react("✅")
        msg.author.send(embed)
        console.log('New member verified!');
        msg.delete({timeout:"2000"})
    }
})
bot.login(token);
