const fs = require('fs');

const praseJSON = async () => {
    return new Promise((success, fail) => {
        fs.readFile(`${__dirname}/../studenti.json`, 'utf8', (err, data) => {
            if (err) return fail(err);
            return success(JSON.parse(data))
        });
    });
}

const writeToJSON = async (data) => {
    return new Promise((success, fail) => {
        fs.writeFile(`${__dirname}/../studenti.json`, JSON.stringify(data), err => {
            if (err) return fail(err);
            return success()
        });
    });
}

module.exports = {
    praseJSON,
    writeToJSON
}