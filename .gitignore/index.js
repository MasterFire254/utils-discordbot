const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (".");
var secondaryPrefix = ("?")

bot.login("MzY5OTI5Mzk2ODA4NTgxMTIw.DZliNA.aerFeGAHsctRyrsjksSwT5ng5h8");

bot.on('ready', function(){
    
    console.log("Connected");
});

bot.on('message', message =>{

    if(message.content === secondaryPrefix + "bg"){
        message.channel.sendMessage("C'est Benedict ");
    };


});

