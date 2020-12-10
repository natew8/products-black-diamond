require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const productCtrl = require('./controllers/productController')


const { SERVER_PORT, CONNECTION_STRING } = process.env
app.use(express.json())

app.get('/api/products', productCtrl.getAll)
app.get('/api/products/:product_id', productCtrl.getOne)
app.post('/api/products', productCtrl.create)
app.put('/api/products/:product_id', productCtrl.update)
app.delete('/api/products/:product_id', productCtrl.delete)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    console.log('DB READY')
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`))
}).catch(err => console.log(err))

