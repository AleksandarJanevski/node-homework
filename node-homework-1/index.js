
const fs = require('fs');
const path = require('path');

/////////////////////////////////////////////////////////////////////////////////////////////////////
// PROMISES
const Folder = (name) =>{
    return new Promise((success,fail)=>{
        fs.mkdir(path.join(__dirname, name), (err)=>{
            if (err) return fail(err);
            return success();
        })
    })
};
const File = (name,file,text) =>{
    return new Promise((success,fail)=>{
        fs.writeFile(`${name}/${file}`, text, {flag: "wx"}, (err) => { // { overwrite: false }
            if (err) return fail(err);
            return success();
        })
    })
};

const secondFile = (file,text) =>{
    return new Promise((success,fail)=>{
        fs.writeFile(file, text, {flag: "wx"}, (err) => { // { overwrite: false }
            if (err) return fail(err);
            return success();
        })
    })
};

const directory = fs.readdirSync(__dirname)

function refreshDir () {
    directory.forEach(folder =>{
        console.log(folder);
    })
};

const RemoveDirectory = (name) =>{
    return new Promise((success,fail)=>{
       fs.rmdir(name,{recursive: true}, (err) => { // fs.rm(path, { recursive: true, force: true }) 
    if(err){
        return fail(err)
    }
    success()
    refreshDir();
  })
    })
};

const RemoveFile = (name) =>{
    return new Promise((success,fail)=>{
        fs.unlink(name,(err) => {
     if(err){
         return fail(err)}
        success()    
        })
    })
};

const readFile = (name) =>{
    return new Promise((success,fail) =>{
        fs.readFile(`${__dirname}/${name}`,'utf8',(err,data) => {
            if(err){
                return fail(err)}
               success(console.log(data))    
               })
    })
}
function listDir(name){
    const directory2 = fs.readdirSync(`${__dirname}/${name}`)
    directory2.forEach(item=>{
        console.log(item);
    })
}
const openFolder = (name) =>{
    return new Promise((success,fail) =>{
        fs.opendir(name,(err,dir)=>{
            if(err) return fail(err)
            success(
                console.log('Entered ' + dir.path + ':'),
                listDir(name)
            )
        })
    })
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
// ASYNC
const create = async (name,file,text) =>{
    try{
        await Folder(name);
        await File(name,file,text);
       
    }
    catch(err){
        console.log(err);
    }
};
const createFolder = async (name) =>{
    try{
        await Folder(name)
    }
    catch(err){
        console.log(err);
    }
}
const createFile = async (file,text) =>{
    try{
        
        await secondFile(file,text);
       
    }
    catch(err){
        console.log(err);
    }
};

const removeFolder = async (name) =>{
    try{
        await RemoveDirectory(name);
    }
    catch(err){
        console.log(err);
    }
};
const removeFile = async (name) =>{
    try{
        await RemoveFile(name);
    }
    catch(err){
        console.log(err);
    }
};
const read = async (name) =>{
    try{
        await readFile(name);
    }
    catch(err){
        console.log(err);
    }
}
const open = async (name) =>{
    try{
        await openFolder(name);
    }
    catch(err){
        console.log(err);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
// EXECUTING

// create("Proba","proba.txt","Ova e mojot tekst")

var obj = [{name:"Bob"},{name:"Thomas"},{name:"Arthur"},{name:"John"}];
var json = JSON.stringify(obj)
// create("JSON","proba.json",json)  
// createFile("text.txt","Random Text")
// createFolder('New Folder')
// removeFolder("JSON")
// removeFile("text.txt")
// removeFile(`${__dirname}/JSON/proba.json`)
// removeFile(`${__dirname}/Proba/proba.txt`)
read("text.txt")
read('JSON/proba.json')
read('Proba/proba.txt')
open('JSON')
open('Proba')
open('New Folder')