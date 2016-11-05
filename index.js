/**
 * Created by daniiltserin on 05.11.2016.
 */
var TelegrammBot = require('node-telegram-bot-api');
var token = '279202606:AAEmlhaQxbyKjRWUzUgCUseBKIn1RAkysC4';

var bot = new TelegramBot(token, {pooling: true});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, "some message");
});