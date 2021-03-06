const service = require('./../index')({})
const bodyParser = require('body-parser')

// parse application/json
service.use(bodyParser.json())

service.post('/echo', (req, res) => {
  res.send(req.body)
})

// start the server
service.start()
