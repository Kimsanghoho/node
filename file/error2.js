const fs = require('fs');


setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {
        if(err){
            console.log(err);    
        }
    });
},1000);