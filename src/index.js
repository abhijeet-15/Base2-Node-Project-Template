const express = require('express');

const  {ServerConfig, LoggerConfig } = require('./config');

const apiRoutes = require('./routes');

const { AboutController, HomeController} = require('./controllers');
const { Logger } = require('winston');

const app = express();

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started server at PORT : ${ServerConfig.PORT}`);
    LoggerConfig.info("Success started the server", {msg: "something"});
});