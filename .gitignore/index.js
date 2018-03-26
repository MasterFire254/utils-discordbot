const discord = require('discord.js');
const bot = new discord.Client();

var prefix = (".")
var secondaryPrefix = ("?")
var game = (".help")


bot.on('ready', function(){
    
    console.log(`Connecté avec ${bot.user.tag} (${bot.user.id}) sur ${bot.guilds.size} `);
    bot.user.setGame(game);
});

bot.on('message', message =>{
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(message.content === secondaryPrefix + "bg"){
        message.channel.sendMessage("C'est Benedict ");
    };

    if(command === "help"){

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
    if(command === "kick"){

            const member = message.mentions.members.first();

            if(!message.member.permissions.has('KICK_MEMBERS')){
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

    if(message.content === prefix + "ping"){
        const then = Date.now();
        message.channel.send('Pinging...').then(m =>{
            m.edit(`Pong! Ca a pris  ${Date.now() - then}ms pour envoyer ce message\nDiscord bot : ${bot.ping}ms`);
        });
    }

});

bot.login(process.env.TOKEN);
