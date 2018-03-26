const discord = require('discord.js');
const bot = new discord.Client();

var prefix = (".")
var secondaryPrefix = ("?")
var game = (".help")


bot.on('ready', function(){
    
    console.log("Connected");
    bot.user.setGame(game);
});

bot.on('message', message =>{

    if(message.content === "?bg"){
        message.channel.sendMessage("C'est Benedict ");
    };

    if(message.content === ".help"){

        //commande help
        var embed = new discord.RichEmbed()
            .setTitle("Page d'aide")
            .addField(".ban [@pseudo] ","Permet de ban des joueurs")
            .addField(".kick [@pseudo]", "Permet de kick des joueurs")
            .addField(".changecolor [@role]","Permet de changer la couleur d'un role")
            .addField(".helpmusic","Permet de voir les commandes pour les musics")
            message.channel.sendEmbed(embed);

    };
    //commande kick    
    if(message.content === ".kick"){

        let command = message.content.slipt(" ")[0];
        const args = message.content.slice(prefix.length).split(/ +/);
        command = args.shift().toLowerCase();
        
            let modRole = message.guild.roles.find("name", "Fondateur");
            if(!message.member.roles.has(modRole.id)){
                return message.reply("Tu n'as pas la permission pour cette commande.");
            };

            if(message.mentions.users.size === 0){
                return message.reply("Merci de mentionner l'utilisateur è kicker.");
            };

            let kickMember = message.guild.member(message.mentions.users.first());
            if(!kickMember){
                return message.reply("Cet utilisateur est introuvable ou impossible à kicker.");
            };
            
            if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
                return message.reply("Je n'ai pas la permission de kick.");
            };

        kickMember.kick().then(member =>{
        message.reply(`${member.user.username} a bien été kick.`);
        message.guild.channels.find("name", "general").send(`**${member.user.username} a été kick par **${message.author.username}**.`);
        });
        

    };
});


bot.login(process.env.TOKEN);
