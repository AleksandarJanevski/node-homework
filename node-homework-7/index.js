const express = require('express');
const actions = require('./controllers/actions')

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))

app.get('/form', actions.getForm);
app.post('/form', actions.postForm);
app.get('/studenti', actions.getStudenti);
app.get('/brishi', actions.izbrisiStudent);

app.listen(8000, err => {
    if (err) return console.log(err);
    console.log('Service started on port 8000');
});