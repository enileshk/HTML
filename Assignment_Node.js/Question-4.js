const fs = require('fs');

fs.rename('oldFile.txt', 'newFile.txt', (err) => {
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log('File renamed successfully.');
  }
});
