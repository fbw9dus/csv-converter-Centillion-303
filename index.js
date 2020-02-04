// const fs = require('fs')
// const util = require('util')
// const path = require('path')

// const csvFilePath='demo.csv'
// const csv=require('csvtojson')


// const args = process.argv.slice(2)

// const fileName = args[0] //'demo.csv'


// const targetFileName = 'demo.json'
// const targetFileNamejson = args[1]

// const targetPath = path.join(__dirname, './', './json/', targetFileName)
// const targetPath1 = path.join(__dirname, './', './json/', targetFileNamejson)
// const readFile = util.promisify(fs.readFile)
// const writeFile = util.promisify(fs.writeFile)



// if (fileName == csvFilePath && args.length == 1) {
//     csv()
//     .fromFile(csvFilePath)
//     .then((jsonObj)=>{
//     console.log(jsonObj);
//     creatFile(JSON.stringify(jsonObj))
//     })

// } else (fileName == "demo.csv" && args.length == 2 )

// async function creatFile(content) {
//     try {
//         await writeFile(targetPath1, content)
//     } catch (error){
//         console.log(error)
//     }
// }




// // // Async / await usage
// // const jsonArray= await csv().fromFile(csvFilePath);

const fs = require('fs')
const path = require('path')
const util = require('util')
const csvtojson = require('csvtojson')
const writeFile = util.promisify(fs.writeFile)

const args = process.argv.slice(2)
const absSourcePath = path.resolve(args[0])
const targetFileName = args[1] || path.parse(absSourcePath).name + '.json'

if(args.length < 1) {
    console.error("Please provide a csv file to convet to JSON")
    process.exit()
}

convert(args[0])

async function convert(csvFilePath) {
    const jsonArray = await csvtojson().fromFile(csvFilePath);
    saveFile(JSON.stringify(jsonArray))
}

async function saveFile(content) {
    try {
        await writeFile(path.join(__dirname, targetFileName), content)
        console.log(`saved file at ${targetFileName}`)
    } catch (error) {
        console.error(`Something went wrong, Could not write json to: ${targetFileName}`)
    }
    
}