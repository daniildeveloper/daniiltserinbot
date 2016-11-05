/**
 * Created by daniiltserin on 05.11.2016.
 */
var tg = require("telegram-node-bot")('279202606:AAEmlhaQxbyKjRWUzUgCUseBKIn1RAkysC4');

tg.router.when(['ping'], PingController);

tg.controller('PingController', function ($) {
    tg.for('ping', function () {
        $.sendMessage('pong');
    });
});
