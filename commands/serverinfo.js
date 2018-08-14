const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let sicon = message.guild.displayAvatarURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Server Information")
      .setColor("#ffff00")
      .setThumbnail(sicon)
      .addField("Server Name", message.guild.name)
      .addField("Created On", message.guild.createdAt)
      .addField("You Joined", message.member.joinedAt)
      .addField("Total Members", message.guild.memberCount)

      message.channel.send(serverembed).then(msg => {msg.delete(5000)});
}

module.exports.help = {
    name: "serverinfo"
}