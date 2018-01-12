const TeleBot = require('telebot');
const bot = new TeleBot({
    token: '532988812:AAGRjJCacLB5sbhzq4OBbNR6JyUjmB_jrR8',
    webhook: {
        key: './webhook_pkey.pem',
        cert: './webhook_cert.pem',
        url: 'https://hidden-plateau-41650.herokuapp.com',
        host: '0.0.0.0',
        port: 3000
    }
});

bot.on('/takeadvice', (msg) => {
        let Hi = "hi";
        if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
            bot.sendMessage(msg.chat.id,"Hello dear user");
        }
});

bot.on('message', (msg) =>{
   let Advice1 = "Надо деньги зарабатывать, а не хернёй страдать!";
   bot.sendMessage(msg.chat.id, Advice1);
});

bot.connect();