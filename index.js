const fastify = require('fastify')
require('dotenv').config();

const server = fastify()

server.register(require('fastify-socket.io'), {})

server.ready(err => {
    if (err) {
        console.error('Error while starting Fastify:', err);
    }
    server.io.on('connection', () => {
        console.log('connection established')
    })

    server.listen({ port: process.env.FASTIFY_SERVER_PORT }, () => {
        console.log("Server is up n runnin")
    })
})

