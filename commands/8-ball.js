const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
    await message.delete();
    if(!args[2]) return message.reply("Please ask a full question")
    let replies = ["Tak.", "Nie.", "Może.", "Nie wiem", "Napewno Tak.", "Napewno Nie.", "Nie Moge Odpowiedzieć na to pytanie."];

    let result = Math.floor((Math.random()* replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "8ball"
}
