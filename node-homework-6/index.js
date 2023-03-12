const express = require("express")
const analiza = require('./controllers/analiza')

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/analiza', analiza.getFormular)
app.post('/analiza', analiza.postFormular)

app.listen(8000, err => {
    if (err) return console.log(err);
    console.log("Server Started on Port 8000");
})