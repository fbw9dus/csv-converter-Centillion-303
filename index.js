const fs = require('fs')
const util = require('util')
const path = require('path')
const args = process.argv.slice(2)
const fileName = args[0] //'demo.csv'
const targetFileName = 'demo.json'

const targetPath = path.join(__dirname, './', './json/', targetFileName)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)



async function creatFile(content) {
    try {
        await writeFile(targetPath, content)
    } catch (error){
        console.log(error)
    }
}



const csvFilePath='demo.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    creatFile(JSON.stringify(jsonObj))
})
 
// // Async / await usage
// const jsonArray= await csv().fromFile(csvFilePath);