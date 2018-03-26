sconst Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (".");
var secondaryPrefix = ("?")

bot.login(process.enc.TOKEN);

bot.on('ready', function(){
    
    console.log("Connected");
});

bot.on('message', message =>{

    if(message.content === secondaryPrefix + "bg"){
        message.channel.sendMessage("C'est Benedict ");
    };


});

