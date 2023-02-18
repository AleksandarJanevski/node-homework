const fs = require('fs')
const path = require('path')


// function makeFolderAndFile (name,file,text){
//     const pateka = path.join(__dirname, name)// da se smesti fajlot vo direktoriumot
//     fs.mkdir(pateka, (err) => {
//             if (err) {
//                 return console.error("The Directory Already Exists");
//             }
//             fs.writeFile(`${name}/${file}`, text ,function (error) {
//                 if (error) {
//                     return console.log(error)
//                 }
//                     console.log('File created');
                
//             })
//             console.log('Directory created successfully!')
//             }
//         )
  
// }

// makeFolderAndFile("Proba","proba.txt","Ova e mojot tekst")

const Folder = (name) =>{
    return new Promise((success,fail)=>{
        fs.mkdir(path.join(__dirname, name), (err)=>{
            if (err) return fail(err);
            return success();
        })
    })
}
const File = (name,file,text) =>{
    return new Promise((success,fail)=>{
        fs.writeFile(`${name}/${file}`,text, (err) => {
            if (err) return fail(err);
            return success();
        })
    })
}


const create = async (name,file,text) =>{
    try{
        await Folder(name);
        await File(name,file,text);
       
    }
    catch(err){
        console.log(err);
    }
}
create("Proba","proba2.txt","Ova e mojot tekst")