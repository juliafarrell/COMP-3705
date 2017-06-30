import fs from 'fs';
import zlib from 'zlib';


class lab4 {

  syncFileRead(fileName) {
    let me = fs.readFileSync(fileName);
    return me;
  }

  asyncFileRead(fileName, callback) {
    fs.readFile(fileName, function(err, ish) {
      if(err) {
        var me = console.error(err);
        return me;
      }
      callback(ish.toString());
    });
  }

  compressFileStream(inputFile, outputFile) {
    let me = fs.createReadStream(inputFile).pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(outputFile));
    return me;
  }


  decompressFileStream(inputFile, outputFile) {
    let me = fs.createReadStream(inputFile).pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(outputFile));
    return me;
  }

  listDirectoryContents(dirName) {
    fs.readdir(dirName, function(err, yada)
     {
      if(err) {
        let me = console.error(err);
        return me;
      }
      callback(yada);
    });
  }
}

export { lab4 };
