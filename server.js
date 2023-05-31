const express = require('express')
const mongoose = require('mongoose')
const Product = require('./Moddels/ProductModel')
const app = express()


app.use(express.json())
//route

app.get('/', (req,res) => {

res.send('Hello Node API')

})

app.get('/blog', (req,res) => {

    res.send('Bloggggg Van Thibeeeeeeee')
   
    })

app.get('/products',async(req,res) => {
try {
    const products = await Product.find({});
    res.status(200).json(products);
} catch (error) {
    res.status(500).json({message: error.message})
}
})

app.get('/products/:id', async(req,res) =>{
try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
} catch (error) {
    res.status(500).json({message: error.message})
}

})

    app.post('/products',async (req, res) => {
        //console.log(req.body);
        //res.send(req.body)
        try {
            const product = await Product.create(req.body)
            res.status(200).json(product);
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message})
        }

    })

mongoose.connect('mongodb+srv://ThibeVanOrshaegen:iDsg.1004@cluster0.e2aauax.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=>{

        console.log('NOTE API app is running on port 3000')
        
        })

})
.catch((error) => {

console.log(error)

})