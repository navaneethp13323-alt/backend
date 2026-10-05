// import json server
const jsonserver = require('json-server')

// create server
const server = jsonserver.create()

// set up route/path for JSON file
const router = jsonserver.router('db.json')

// create middleware
const middleware = jsonserver.defaults()

// use middleware & router
server.use(middleware)
server.use(router)

// create server port number
const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})