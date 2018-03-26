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
        msg.channel.sendmsg("C'est Benedict ");
    };

    if(msg.content === "help"){

        //commande help
        var embed = new discord.RichEmbed()
            .setTitle("Page d'aide")
            .addField(".ban [@pseudo] ","Permet de ban des joueurs")
            .addField(".kick [@pseudo]", "Permet de kick des joueurs")
            .addField(".changecolor [@role]","Permet de changer la couleur d'un role")
            .addField(".helpmusic","Permet de voir les commandes pour les musics")
            msg.channel.sendEmbed(embed);

    };

    //commande kick    
    if(msg.content === "kick"){

            const member = msg.mentions.members.first();

            if(!msg.member.permissions.has('KICK_MEMBERS')){
                return msg.reply("Tu n'as pas la permission pour cette commande.");
            };

            if(msg.mentions.users.size === 0){
                return msg.reply("Merci de mentionner l'utilisateur è kicker.");
            };

            if(!member){
                return msg.reply("Cet utilisateur est introuvable ou impossible à kicker.");
            };
            
        

    };

    if(msg.content === prefix + "ping"){
        const then = Date.now();
        msg.channel.send('Pinging...').then(m =>{
            m.edit(`Pong! Ca a pris  ${Date.now() - then}ms pour envoyer ce msg\nDiscord bot : ${bot.ping}ms`);
        });
    }

});

bot.login(process.env.TOKEN);
