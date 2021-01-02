const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const controller = require('./controllers/product.js')
const mongodb = require('./services/dbConnect.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors())

//config public folders
app.use('*/css', express.static('public/css'));
app.use('*/js', express.static('public/js'));

//initialize EJS
app.set('view engine', 'ejs')
app.set('views', './views')

//routing
app.get('/', controller.GetHomePage)
app.get('/add', controller.GetAddPage)

//routing API
app.post('/api/product/add', controller.AddProduct_API)
app.get('/api/products', controller.GetProducts_API)
app.get('/api/product/name=:name', controller.GetProductByName_API)
app.get('/api/product/remove/id=:id', controller.RemoveProduct_API)
app.patch('/api/product/update/id=:id', controller.UpdateProduct_API)

//initialize port running
app.listen(3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000')
})
