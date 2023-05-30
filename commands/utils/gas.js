
module.exports = {
    name: "gas",
    aliases: ['g'],
    description: "Fetches gas price from https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-des-carburants-en-france-flux-instantane-v2&q=&facet=carburants_disponibles&facet=carburants_indisponibles&facet=horaires_automate_24_24&facet=services_service&facet=departement&facet=region",
    run: async (message, args, command, client) => {

      const { MessageEmbed } = require('discord.js-selfbot-v13');
      const axios = require('axios');
      const url = 'https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-des-carburants-en-france-flux-instantane-v2&q=&facet=carburants_disponibles&facet=carburants_indisponibles&facet=horaires_automate_24_24&facet=services_service&facet=departement&facet=region';
 
      const postalCode = args[0];
      const response = await axios.get(url);
      const data = response.data.records.filter(record => record.fields.code_postal === postalCode).sort((a, b) => a.fields.valeur - b.fields.valeur).fields;
      //const fuel = data.libelle_carburant;
      const fuel = "Gazole";
      const price = data.valeur;
      const date = data.date_releve;
      const station = data.nom_station;
      const address = data.adresse;
      const city = data.commune;
      const lat = data.latitude;
      const long = data.longitude;
      
      const messageToSend = `Gas Price for ${fuel}\nPrice: ${price} €/L\nStation: ${station}\nAddress: ${address}, ${postalCode} ${city}\nDate: ${date}\nCoordinates: Latitude: ${lat}, Longitude: ${long}`;
      
      await message.channel.send(messageToSend);
    }
  }


