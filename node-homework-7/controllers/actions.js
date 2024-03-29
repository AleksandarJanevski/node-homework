const { praseJSON, writeToJSON } = require('./promise');

const getForm = async (req, res) => {
    res.render('formular');
};

const postForm = async (req, res) => {
    let arrayJSON = await praseJSON();
    const { ime, prezime, prosek } = req.body;

    if (ime.trim() === '' || prezime.trim() === '') {
        // return res.status(400).send('Bad Request');
        return res.redirect('bad-request');
    }

    let formObj = { name: ime, surname: prezime, average: prosek };
    arrayJSON.push(formObj);
    await writeToJSON(arrayJSON);
    res.redirect('/studenti');
};

const getStudenti = async (req, res) => {
    let arrayJSON = await praseJSON();
    res.render('studenti', { studenti: arrayJSON });
};

const izbrisiStudent = async (req, res) => {
    let arrayJSON = await praseJSON();
    let index = parseInt(req.query.i);
    arrayJSON = arrayJSON.filter((element, i) => i !== index);
    await writeToJSON(arrayJSON);
    res.redirect('/studenti');
};

const badRequest = (req, res) => {
    res.render('badRequest');
}

module.exports = {
    getForm,
    postForm,
    getStudenti,
    izbrisiStudent,
    badRequest
};