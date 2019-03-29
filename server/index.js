require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const controller = require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env


app.use(express.json())

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('DB set!')
    console.log(db.listTables)
})
.catch(err => console.log(err))

app.get('/api/inventory', controller.get)
app.post('/api/product', controller.post)



app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))