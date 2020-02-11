const auth = require('./auth');
let auther = new auth("1577njfq","9vwGh74t");
const s = require('./send');
let sender = new s(auther);
sender.send("Han","233558359341","I love you");