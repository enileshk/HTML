const fs = require('fs');

try {
  const data = fs.readFileSync('example.txt', 'utf8');  // Replace 'example.txt' with your file path
  console.log(data);
} catch (err) {
  console.error('Error reading file:', err);
}
