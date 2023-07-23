const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 5000

app.use(express.json());
app.get('/', (req, res) => {
    res.send('server start thai gayu');
})


// available router routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/note'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
connectToMongo();