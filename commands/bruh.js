module.exports = {
    name: 'bruh',
    description: "bruh lol",
    execute(client, message, args, Discord) {
        const bruh = new Discord.MessageEmbed()

            .setColor('#55C2FF')
            .setTitle('bruh')
            .setAuthor(`For ${message.author.username}`)

        message.channel.send(bruh);
    }
}