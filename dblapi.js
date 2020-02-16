const DBL = require("dblapi.js");

const config = require("./config.json");
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const serva = server.listen(process.env.PORT);

const dbl_webhook = new DBL(
    config.dbl_token, {
    webhookAuth: 'mmkdmkmmkdmk',
    webhookPort: process.env.PORT,
    webhookServer: serva
}, bot);

app.get('/', (req, res) => {
    res.send("Hello?");
});
 
dbl_webhook.webhook.on('vote', vote => {
    console.log(`User with ID ${vote.user} just voted!`);
});
dbl_webhook.webhook.on('ready', hook => {
    console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl_webhook.webhook.on('error', e => {
    console.log(`Oops! ${e}`);
});
