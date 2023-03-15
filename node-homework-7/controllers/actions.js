const { praseJSON, writeToJSON } = require('./promise')

const getForm = async (req, res) => {
    res.render('formular');
}

const postForm = async (req, res) => {
    let arrayJSON = await praseJSON();
    const { ime, prezime, prosek } = req.body;
    let formObj = { name: ime, surname: prezime, average: prosek };
    arrayJSON.push(formObj);
    await writeToJSON(arrayJSON);
    res.redirect('/studenti')
}

const getStudenti = async (req, res) => {
    let arrayJSON = await praseJSON();
    let data = {
        studenti: arrayJSON
    }
    res.render('studenti', data);
}

const izbrisiStudent = async (req, res) => {
    let arrayJSON = await praseJSON();
    let index = req.query.i;
    arrayJSON = arrayJSON.filter((element, i) => i !== index);
    await writeToJSON(arrayJSON);
}


module.exports = {
    getForm,
    postForm,
    getStudenti,
    izbrisiStudent
}