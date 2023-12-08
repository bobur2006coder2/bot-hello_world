const { Telegraf } = require('telegraf');
var bot = new Telegraf('6846338930:AAFUEb370Evfz39l2YZd7D8S6wl5jbJqVUo');
bot.start(ctx => ctx.reply(`Hello world`))
bot.launch();