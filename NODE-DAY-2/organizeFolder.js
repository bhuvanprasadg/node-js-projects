var fs = require('fs');

const path = require('path');

const mySet = new Set();

class folderOrganize {

    constructor(folder){

        this.folder = folder;

        fs.readdir(this.folder, (err, files) => {

            if(err){
                console.error(err);
            }
    
            files.forEach(file => {
    
                let extension = path.extname(file);
    
                mySet.add(extension.slice(1,));
    
            });
    
    
            mySet.forEach(extension => {
    
                fs.mkdir(path.join(this.folder, extension), (err) => {
                    
                    if (err) {
                        return console.error(err);
                    }
            
                    files.forEach(file => {
            
                        if (file.endsWith(extension)){
    
                            var oldPath = path.join(this.folder,file);
                            
                            var newPath = path.join(path.join(this.folder, extension),file);
                
                            fs.rename(oldPath, newPath, function (err) {
    
                                if (err) throw err
    
                            });
                        }
    
                    });
    
                });
    
            });
    
            console.log('Files Transformed Successfully..!');
    
        });
    }
}

module.exports = folderOrganize;