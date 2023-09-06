const tmi = require('tmi.js');

const client = new tmi.Client({
    connection: {
      secure: true,
      reconnect: true
    },
    channels: [ '' ]
    //place the names of the tracked channels into the array above as string
  });

client.connect();

client.on('message', (channel, tags, message, self) => {
    let jsonMessage = JSON.stringify(channel, tags, message);
    //the jsonMessage would then be sent to a server.js to upload the message to a mongoDB
    //we need to discuss what we actually want and how we arrange it
});