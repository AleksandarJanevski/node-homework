const fs = require('fs')
const path = require('path')


function makeFolderAndFile (name,file,text){
    const pateka = path.join(__dirname, name)// da se smesti fajlot vo direktoriumot
    fs.mkdir(pateka, (err) => {
            if (err) {
                return console.error("The Directory Already Exists");
            }
            fs.writeFile(`${name}/${file}`, text ,function (error) {
                if (error) {
                    return 
                }
                    console.log('File created');
                
            })
            console.log('Directory created successfully!')
            }
        )
  
}

makeFolderAndFile("Proba","proba.docx","Ova e mojot tekst")


