var fs = require('fs');

var path = require('path');

const chokidar = require('chokidar');

// var oldPath = 'C:/Users/bhuva/Documents/HTML/dummy2';

// var originalNewPath = 'C:/Users/bhuva/Documents/HTML/dummy3';

var oldPath = process.argv[2];

var originalNewPath = process.argv[3];

var ord = path.basename(oldPath);

var watcher = chokidar.watch(oldPath, {persistent: true});

watcher
    .on('add', function(oldPath) {

        var newPath = path.join(originalNewPath, '/', path.basename(oldPath));

        fs.copyFile(oldPath, newPath, (err) => {

            if(err) throw err;

        });

        // console.log('file created');

    })
    .on('change', function(oldPath) {

        var newPath = path.join(originalNewPath, '/', path.basename(oldPath));

        fs.copyFile(oldPath, newPath, (err) => {

            if(err) throw err;

        });

        // console.log('file changed');

    })
    .on('unlink', function(oldPath) {

        var newPath = path.join(originalNewPath, '/', path.basename(oldPath));

        fs.unlink(newPath, (err) => {

            if(err) throw err;

        });

        // console.log('file removed');

    })
    .on('addDir', oldPath => {

        var newPath = path.join(originalNewPath, '/', path.basename(oldPath));

        if(ord != path.basename(oldPath)){

            fs.mkdir(newPath,(err) => {

                if(err) throw err;
    
            });
        }

        // console.log('Directory Created');

    })
    .on('unlinkDir', oldPath => {

        var newPath = path.join(originalNewPath, '/', path.basename(oldPath));

        if(ord != path.basename(oldPath)){

            fs.rmdir(newPath, (err) => {

                console.log(newPath);

                if(err) throw err;

            });
        }

        // console.log('Directory Deleted');

    })
    .on('error', function(error) {console.error('Error happened', error);})
