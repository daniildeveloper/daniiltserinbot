<?php
/**
 * Created by PhpStorm.
 * User: daniiltserin
 * Date: 04.11.2016
 * Time: 17:02
 */
require_once 'vendor/autoload.php';

$bot = new TelegramBot\Api\Client('279202606:AAEmlhaQxbyKjRWUzUgCUseBKIn1RAkysC4');

//run bot
$bot->run();

$bot->command('start', function ($message) use ($bot) {
    $answer = 'Hello!';
    $bot->sendMessage($message->getChat()->getId(), $answer);
});
