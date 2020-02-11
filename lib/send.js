const request = require('request');
const rp = require('request-promise')

class sender {
    constructor(ob){
        this.base = "https://api.smsglobal.com/http-api.php";
        this.action = "sendsms";
        this.from = false;
        this.to = false;
        this.text = false;
        this.user = ob.user;
        this.pass = ob.pass;
    }
    send(from, to, text){
        this.from = from;
        this.to = to;
        this.text = text;
        let sendstring;
        if(this.from && this.to && this.text){
            sendstring = this.concater();
            rp(sendstring)
            .then(console.log).catch(console.error)
        }else{
            console.error("Some fields are empty!");
        }
        
    }
    concater(){
        return `${this.base}?action=${this.action}&from=${this.from}&to=${this.to}&text=${this.text}&user=${this.user}&password=${this.pass}`;
    }
}

module.exports = sender;