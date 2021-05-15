const express = require('express');  
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService'); //calling the dbservice module 
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended : false}));

//creating the insert api
app.post('/insert', (request, response) => {
    const {name} = request.body;
    const db = dbService.getDbServiceInstance();

//     const result = db.insertNewName(name);
//     result
//     .then(data => response.json({data: data}))
//     .catch(err => console.log(err));
});

//reading api
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();
    
    result 
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

//update api
app.patch('/update', (request, response)=>{
    console.log(request.body);
    const {id, name} =request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.updateNameById(id, name);
    console.log(name, id);
    
    result 
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));

});

//delete deleting api
app.delete('/delete/:id', (request, response) =>{
    const {id} = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowById(id);
    
    result 
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});
//searching api
app.get('/search/:name', (request, response)=>{
    const {name} = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.searchByName(name);
    
    result 
    .then(data => response.json({data : data}))
    .catch(err => console.log(err)); 
})

app.listen(process.env.PORT,() => console.log('app is running'));