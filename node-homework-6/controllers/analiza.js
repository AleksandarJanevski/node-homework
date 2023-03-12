const fs = require('fs');

const getFile = async (file, data1, data2, data3, data4, data5, data6, data7) => {
    return new Promise((success, fail) => {
        fs.readFile(`${__dirname}/../views/${file}.html`, 'utf-8', (err, content) => {
            if (err) return fail(err);
            const objekt = {
                '{data1}': data1,
                '{data2}': data2,
                '{data3}': data3,
                '{data4}': data4,
                '{data5}': data5,
                '{data6}': data6,
                '{data7}': data7
            };
            for (const kluc in objekt) {
                content = content.replace(kluc, objekt[kluc]);
            }
            return success(content);
        })
    })
}

const getFormular = async (req, res) => {
    try {
        let output = await getFile('formularGet', '')
        res.send(output)
    } catch (err) {
        console.log(err);
    }
}

const postFormular = async (req, res) => {
    let rezultat = req.body.tekst.toLowerCase();
    let zborovi = rezultat.split(" ");
    let pomali = 0;
    let pogolemi = 0;
    let recenici = rezultat.split(".");
    let samoglaski = ["a", "e", "i", "o", "u"]
    let samoglaskiCounter = 0;

    for (let zbor of zborovi) {
        if (zbor.length < 5) {
            pomali++
        }
        if (zbor.length > 5) {
            pogolemi++
        }
        if (samoglaski.includes(zbor[0])) {
            samoglaskiCounter++
        }
    }

    try {
        let output = await getFile('rezultatiPost', rezultat.length, pomali, pogolemi, (zborovi.length - pogolemi - pomali), recenici.length, zborovi.length, samoglaskiCounter)
        res.send(output);
    } catch (err) {
        console.log(err);
        res.status(500).send('internal server error')
    }

}
module.exports = {
    getFormular,
    postFormular
}