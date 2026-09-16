const fs = require('fs');
const strings = JSON.parse(fs.readFileSync('./scratch/extracted_strings.json', 'utf8'));

const keywords = ['Saiful', 'Kabir', 'Chowdhury', 'Developer', 'Shopify', 'WordPress', 'React', 'Full Stack', 'github.com', 'linkedin.com', 'gmail.com', 'email', 'project', 'Project', 'App', 'Website', 'Experience', 'Service', 'Skill', 'Education', 'http'];

const unique = Array.from(new Set(strings.filter(s => {
  return keywords.some(k => s.includes(k)) && s.length < 500;
})));

fs.writeFileSync('./scratch/portfolio_extracted_summary.txt', unique.join('\n---\n'));
console.log('Filtered portfolio summary lines:', unique.length);
