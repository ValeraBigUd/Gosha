const TeleBot = require('telebot');
const bot = new TeleBot ({
    token: '532988812:AAGRjJCacLB5sbhzq4OBbNR6JyUjmB_jrR8',
    webhook: {
        key:'./server.key',
        cert:'./server.crt',
        url: 'https://hidden-plateau-41650.herokuapp.com',
        host: '0.0.0.0',
        port: 443
    }
});

bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;
    return bot.sendMessage(id, `You said: ${ text }`);
});

bot.connect();