const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

jsonArray = require('./cars.json');
const array = [];
jsonArray = jsonArray['cars'];

for(var i in jsonArray){
    array.push(jsonArray[i]);
}

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.get('/cars', (req, res) => {
    console.log(array);
    res.send(array);
});

app.post('/create/car', function (req, res){
    const id = array.length +1 ;
    const rank = req.body.rank;
    const model = req.body.model;
    const quantity = req.body.quantity;
    const changeQuantityPercent = req.body.changeQuantityPercent;

    array.push({id: id, rank: rank, model:model, quantity:quantity, changeQuantityPercent:changeQuantityPercent});
    console.log(JSON.stringify(array));
    res.send({'rank': rank, 'model':model, 'quantity':quantity, 'changeQuantityPercent':changeQuantityPercent});
})


app.put('/update/car', function (req, res){
    const id = req.body.id;
    const rank = req.body.rank;
    const model = req.body.model;
    const quantity = req.body.quantity;
    const changeQuantityPercent = req.body.changeQuantityPercent;

    var car = array.findIndex((car => car.id == id));
    console.log("Car: " + car);
    array[car].rank = rank;
    array[car].model = model;
    array[car].quantity = quantity;
    array[car].changeQuantityPercent = changeQuantityPercent;
    
    res.send({'rank': rank, 'model':model, 'quantity':quantity, 'changeQuantityPercent':changeQuantityPercent});
})

app.delete('/delete/car', function (req, res){
    const id = req.body.id;
    var car = array.indexOf(id);
    
    array.splice(car, 1);
    res.send();
})

app.listen(port, () => {
    console.log(`Example app listing on part ${port}`)
});