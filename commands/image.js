//const { Channel } = require('discord.js');
//var Scraper = require('images-scraper');

//const google = new Scraper({
//  puppeteer: {
//    headless: true,
//  },
//});

module.exports = {
  name: 'image',
  description: "Searches any Google Image and returns the best one to the chat",
  async execute(client, message, args, Discord) {

   const sorry = new Discord.MessageEmbed()

    .setColor('#FF5733')
    .setTitle('Image Scraper is under maintenance')
    .setAuthor(`For ${message.author.username}`)
    .setDescription('My dev is having some trouble with the Image Search module, please hang on while he can fix it!')
    .setFooter('Images Provided by Google™ Images')   

    message.channel.send(sorry)

    //const noArgs = new Discord.MessageEmbed()

    //  .setColor('#FF5733')
    //  .setTitle('Error')
    //  .setAuthor(`For ${message.author.username}`)
    //  .setDescription('Cool image, here\'s what I found: (*nothing*)')
    //  .setFooter('Images Provided by Google™ Images')

    //const imageQuery = args.join(' ');
    //if (!imageQuery) return message.channel.send(noArgs);
    //if (imageQuery) {
    //  const searchingImage = new Discord.MessageEmbed()
    //  .setColor('#55C2FF')
    //  .setTitle(`Searching for **` + (imageQuery) + `** :mag:`)
    //  .setAuthor(`For ${message.author.username}`)
    //  .setFooter('Images Provided by Google™ Images')
    //  message.channel.send(searchingImage);
    //  const imageResult = await google.scrape(imageQuery, 1);
    //  const finalImage = new Discord.MessageEmbed()
    //  .setColor('#55C2FF')
    //  .setTitle(`Here\'s what I found for **` + (imageQuery) + `** :mag:`)
    //  .setAuthor(`For ${message.author.username}`)
    //  .setFooter('Images Provided by Google™ Images')
    //  message.channel.send(finalImage)
    //  message.channel.send(imageResult[0].url)
    //}
  }
}
