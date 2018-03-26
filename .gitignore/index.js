const discord = require('discord.js');
const bot = new discord.Client();

var prefix = (".")
var secondaryPrefix = ("?")
var game = (".help")


bot.on('ready', function(){
    
    console.log(`Connecté avec ${bot.user.tag} (${bot.user.id}) sur ${bot.guilds.size} serveurs`);
    bot.user.setGame(game);
});

bot.on('message', msg =>{;

    if(msg.content === secondaryPrefix + "bg"){
        msg.channel.sendMessage("C'est Benedict ");
    };

    if(msg.content === prefix + "help"){

        //commande help
        var embed = new discord.RichEmbed()
            .setTitle("Page d'aide")
            .addField(".ban [@pseudo] ","Permet de ban des joueurs")
            .addField(".kick [@pseudo]", "Permet de kick des joueurs")
            .addField(".changecolor [@role]","Permet de changer la couleur d'un role")
            .addField(".helpmusic","Permet de voir les commandes pour les musics")
            msg.channel.sendEmbed(embed);

    };

    //PING
    if(msg.content === prefix + "ping"){
        const then = Date.now();
        msg.channel.send('Pinging...').then(m =>{
            m.edit(`Pong! Ca a pris  ${Date.now() - then}ms pour envoyer ce msg\nPing du bot : ${bot.ping}ms`);
        });
    }
    //KICK
    if(msg.content === prefix + "kick"){
        if(!msg.member.permissions.has('KICK_MEMBERS')) return msg.reply("Tu n'as pas les permissions nécéssaires.");
        const member = msg.mentions.members.first();
        if(!member) return msg.reply("Mauvais usage fait comme ça : `.kick @User#1234`");
        member.kick();

    }

    //BAN
    if(msg.content === prefix + "ban"){
        if(!msg.member.permissions.has("BAN_MEMBERS")) return msg.reply("Tu n'as pas les permissions nécéssaires.");
        const member = msg.mentions.members.first();
        if(!member) return msg.reply("Mauvais usage fait comme ça : `.ban @User#1234`");
        member.ban();

    }

});

bot.login(process.env.TOKEN);
