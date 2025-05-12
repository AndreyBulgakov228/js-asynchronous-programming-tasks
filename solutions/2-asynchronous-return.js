import fs from 'fs';

// BEGIN
const write = (filePath, data, callback) => {
    fs.writeFile(filePath, data, 'utf8', () => {
        callback();
    });
}
export default write;
// END