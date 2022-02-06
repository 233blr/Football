import fs from 'fs';

const matches = fs.readFileSync('db.csv', {
  encoding: 'utf-8'
})
