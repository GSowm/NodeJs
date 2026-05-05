import fs from 'fs';

fs.readFile('data.txt', 'utf-8', (err,data)=>{
    if(err) throw err;

    fs.writeFile('msg.txt', data, (err,data)=>{
        if(err) throw err;

        console.log("File Created Successfully");
    })
})