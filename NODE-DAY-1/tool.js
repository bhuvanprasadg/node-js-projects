var fs = require('fs');

const path = require('path');

var folder = path.join(process.argv[2],'/');

const mySet = new Set();

fs.readdir(folder, (err, files) => {

    if(err){
        console.error(err);
    }

    files.forEach(file => {

        let extension = path.extname(file);

        mySet.add(extension.slice(1,));

    });


    mySet.forEach(extension => {

        fs.mkdir(path.join(folder, extension), (err) => {
            
            if (err) {
                return console.error(err);
            }
    
            files.forEach(file => {
    
                if (file.endsWith(extension)){

                    var oldPath = path.join(folder,file);
                    
                    var newPath = path.join(path.join(folder, extension),file);
        
                    fs.rename(oldPath, newPath, function (err) {

                        if (err) throw err

                    });
                }

            });

        });

    });

    console.log('Files Transformed Successfully..!');

});

