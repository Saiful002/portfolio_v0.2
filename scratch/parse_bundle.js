const fs = require('fs');

const bundle = fs.readFileSync('./scratch_js.txt', 'utf8');

// Find project titles, descriptions, tech stack, email, social links, bio, etc.
const strRegex = /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g;
let match;
const strings = [];

while ((match = strRegex.exec(bundle)) !== null) {
  const str = match[0].slice(1, -1);
  if (str.length > 5 && !str.includes('webpack') && !str.includes('react') && !str.includes('babel') && !str.includes('http://www.w3.org')) {
    strings.push(str);
  }
}

fs.writeFileSync('./scratch/extracted_strings.json', JSON.stringify(strings, null, 2));
console.log('Saved extracted strings:', strings.length);
