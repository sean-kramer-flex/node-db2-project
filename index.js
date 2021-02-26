const server = require('./api/server')

const port = process.env.PORT || 5000;

server.get('/welcome', (req, res) => {
  res.send('welcome to cars api')
})

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))
