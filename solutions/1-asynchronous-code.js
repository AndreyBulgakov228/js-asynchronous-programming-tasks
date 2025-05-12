import fs from 'fs';

// BEGIN
const print = (filePath) => {
    fs.readFile(filePath, 'utf-8', (_error, data) => {
        console.log(data);
    });
}
export default print;
// END
