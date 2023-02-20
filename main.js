const config = require("./config.json")
const chalk = require("chalk")
const { Client } = require("discord.js-selfbot-v13");




function setTitle(title) {   
    if (process.platform == "win32") {
      process.title = title;
    } else {
      process.stdout.write("\x1b]2;" + title + "\x1b\x5c");
    }
}

const Tokens = config.Tokens;
const Channels = config.Channels;
const MessageInterval = config.sendMessageInterval;
const TokensLenght = Tokens.length;
const ChannelsLeght = Channels.length;

setTitle(`OWOCASH | https://github.com/westydev | Made By WestyDev | ${TokensLenght} Tokens | ${ChannelsLeght} Channels`);

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
993754957985632266
var messageIndex = 0;

(async () => {
   console.log(chalk.default.blue(`Loading ${TokensLenght} Tokens.`));
   console.log(chalk.default.blue(`Loading ${ChannelsLeght} Channnels.`));
   console.log("\n");
   for (let index = 0; index < Tokens.length; index++) {
    const token = Tokens[index];
    const client = new Client({
        checkUpdate: false
    });
    await client.login(token).then(x => console.log(chalk.default.green(`Token [${index + 1}] ${client.user.username} Logined.`))).catch(err => console.log(chalk.default.red(`Token [${index + 1}] [${token.slice(5, 25)}] Failed.`)));
    client.on("ready", async () => {
        setInterval(() => {
            const channelindex = Math.floor(Math.random() * ChannelsLeght);
            const channelID = Channels[channelindex]
            const channel = client.channels.cache.get(channelID);

            channel.send({ content: `${makeid(64)}` })

           messageIndex = messageIndex + 1;

            setTitle(`OWOCASH | https://github.com/westydev | Made By WestyDev | ${TokensLenght} Tokens | ${ChannelsLeght} Channels | ${messageIndex} Message Sended`);

  
        }, MessageInterval)
             
    })
   }
})();