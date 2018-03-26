const d = require('discord.js');
const bot = new Discord.Client();

var prefix = (".");
var secondaryPrefix = ("?")



bot.on('ready', function(){
    
    console.log("Connected");
    bot.user.setGame(".help");
});

bot.on('message', message =>{

    if(message.content === secondaryPrefix + "bg"){
        message.channel.sendMessage("C'est Benedict ");
    };

    if(message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Page d'aide")
            .addField(".ban [pseudo] ","Permet de ban des joueurs")
            .addBlankField()
            .addField(".kick [pseudo]", "Permet de kick des joueurs")
            .addBlankField()
            message.channel.sendEmbed(embed);
    }

});

bot.login(process.env.TOKEN);
