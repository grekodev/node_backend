const express = require('express');
const messages = require('../components/messages/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

const routes = function(server){
    server.use('/message', messages);
    server.use('/user', user);
    server.use('/chat', chat);
}

module.exports = routes;