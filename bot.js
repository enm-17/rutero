console.log('listo');
const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();


client.on("guildMemberAdd", (member) => {
   console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('487345635935256587'); 
   canal.send(`${member.user}, Bienvenido al servidor de RutaBlockchain :kissing_heart: \n Te invitamos a visitar el canal #general para que conozcas m\u00E1s sobre nosotros `);
   
});
client.login('NDg3Mjc3NTc5Nzc5NDQwNjYx.DrVyUQ.aUZKXj9m0cwEiYdP4kwImLsX8Ek');


bot.on('message', (message) => {
		if (message.content == 'hola') {
			message.channel.sendMessage('Saludos de parte del xxxxxx de RutaBlockchain. \n Gracias por ser parte de Ruta y Te invitamos a nuestros Podcast Estelares');
			
		}
	else
		if (message.content == 'buenos dias') {
			message.channel.sendMessage('Hola 2');
		}
	else
		if (message.content == 'saludos') {
			message.channel.sendMessage('Hola 3');
		}
});
bot.login('NDg3Mjc3NTc5Nzc5NDQwNjYx.DrVyUQ.aUZKXj9m0cwEiYdP4kwImLsX8Ek');
