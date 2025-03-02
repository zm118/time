const fs = require('fs');

const timeData = { time: new Date().toISOString() };
fs.writeFileSync('time.json', JSON.stringify(timeData, null, 2));
