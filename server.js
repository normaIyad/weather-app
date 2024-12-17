// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 3000;
const server = app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
// GET route for all data
app.get('/all', (req, res) => {
  res.send(projectData);
  console.log(projectData);
}); 
app.post("/add" , (req , res)=>{
 try{ projectData.push(req.body);
  res.send({massage : "success"});
  console.log(req.body);
 } catch(e){
  res.status(404).send({massage : "Failed to add data", e});
 }
})
 
const data  = [];
app.post("/wether/create", (req, res)=>{
  data.push(req.body);
  res.send({massage : "success"});
  console.log(req.body);
})