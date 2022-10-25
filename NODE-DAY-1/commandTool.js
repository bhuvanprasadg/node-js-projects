
var fs = require('fs');

var zipper = require('zip-local');

const path = require('path');

var folder = process.argv[2];

fs.readdir(folder, (err, files) => {

    if(err){
        console.error(err);
    }

    fs.mkdir(path.join(folder, 'allFiles'), (err) => {
            
        if (err) {
            return console.error(err);
        }

        files.forEach(file => {

            var oldPath = path.join(folder,file);

            var newPath = path.join(path.join(folder, 'allFiles'),file);
    
            fs.rename(oldPath, newPath, function (err) {

                if (err) throw err

            });

        });

    });

    var savedir = path.join(path.join(folder,'/'),'allFiles.zip');

    zipper.sync.zip(folder).compress().save(savedir);

});

console.log('Zip File Created Successfully');
