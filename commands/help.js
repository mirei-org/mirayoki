module.exports = {
    name: 'help',
    aliases: ['h'],
    description: "Gives you information about the bot.",
    execute(message, args, cmd, client, Discord) {

        const newEmbed = new Discord.MessageEmbed()

            .setColor('#25c720')
            .setTitle('Need help huh?')
            .setDescription('__My prefix is "-"__')
            // .setURL('url') to add a link to the title
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            // .setThumbnail('img url') to add small image next to title
            .addFields(
                { name: 'Commands', value: 'Useful basic features to help you in your Discord tasks.' },
                { name: '-ping, -p', value: 'Replies to you with your actual ping', inline: true },
                { name: '-status', value: 'Tells you current status of the bot', inline: true },
                { name: 'Useful Commands', value: 'Commands made to enhance your Discord Experience.' },
                { name: '-image, -img', value: 'Searches an Image Online and returns it to you.', inline: true },
                { name: '-suggest, -suggestion', value: 'Suggest anything, and place it on the #suggestions channel.', inline: true },
                { name: 'Other Commands', value: 'Commands that are on Mirayoki because he can do it, and for fun, too.' },
                { name: '-perms', value: '*~flex with your permissions~* (and know them too)', inline: true },
                { name: '-bruh', value: 'bruh bruh bruh', inline: true },
                { name: 'Other modules help', value: 'Different help for different things.' },
                { name: '-ihelp, -ih', value: 'Help information for the Image Search module', inline: true },
                { name: '-rhelp', value: 'Help information for the role module', inline: true },
                { name: '-adminhelp, -ahelp, -modhelp', value: 'Help information about the Administration of the bot', inline: true },
            )
            // .setImage('img url') to add a big image at the bottom
            // .setTimestamp() If you want to actual date
            .setFooter('If you are still having trouble, be sure to type -support for more help!') // , 'img url') to add image

        message.channel.send(newEmbed);
    }
}