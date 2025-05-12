import fs from 'fs';

// BEGIN
const watch = async (filepath, interval, callback) => {
fs.stat(filepath, (err, stats) => {
    if (err) {
      return callback(err); 
    }

    let lastMtime = stats.mtime;

    const timerId = setInterval(() => {
      fs.stat(filepath, (err, stats) => {
        if (err) {
          clearInterval(timerId);
          return callback(err); 
        }

        if (lastMtime < stats.mtime) {
          callback(null); 
          lastMtime = stats.mtime;
        }
      });
    }, interval);

    return () => clearInterval(timerId);
  });
}
  export default watch;
// END
