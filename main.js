

const TeleBot = require('telebot');
const bot = new TeleBot('532988812:AAGRjJCacLB5sbhzq4OBbNR6JyUjmB_jrR8');

const someArray = ['One', 'Two', 'Three', 'Four', 'Five'];
const index = Math.round(Math.random() * someArray.length);
bot.on(['/start', '/hello'], (msg) => msg.reply.text(someArray[index]));
bot.start();