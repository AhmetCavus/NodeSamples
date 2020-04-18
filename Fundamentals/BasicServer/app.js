const http = require('http')
const routingHandler = require('./routing')

var server = http.createServer(routingHandler)
server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})