const express = require('express')
const app = express()
const port = 3000

const products = [
    { 
        id: 1, 
        name: 'Product 1',
        price: 100,
        img: 'https://picsum.photos/200/300',
        stock: 1,
    },
]


app.get('/', (req, res) => {
    res.send('index.html')
})

app.use('/', express.static('+USO Landing'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})