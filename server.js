const express = require('express');

const projectsRouter = require('./routers/projects_router');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);


server.use("/", (req, res) => {
    res.json({message: "Welcome to our API!"})
})

module.exports = server;