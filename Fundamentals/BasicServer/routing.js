const routingHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    if(req.url === '/') {
        res.write('<html>')
        res.write('<head></head>')
        res.write('<body>')
        res.write('<form method="POST" action="create-user">')
        res.write('<input type="text" name="username" />')
        res.write('<button type="submit">Send</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    } else if(req.url.endsWith('/users') && req.method === 'GET') {
        res.write('<html>')
        res.write('<head></head>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>')
        res.write('User 1')
        res.write('</li>')
        res.write('<li>')
        res.write('User 2')
        res.write('</li>')
        res.write('</ul>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    } else if(req.url.endsWith('/create-user') && req.method === 'POST') {
        const body = []
        req.on('data', chunk => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const username = parsedBody.split("=")[1]
            console.log(username)
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()
        })
    } else {
        res.write('Not supported')
        res.end()
    }
}

module.exports = routingHandler