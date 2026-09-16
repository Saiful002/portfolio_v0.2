const fs = require('fs');
const bundle = fs.readFileSync('./scratch_js.txt', 'utf8');

const matches = bundle.match(/.{0,200}(GUB_IDPC_2025|Round-Trip|Saiful|Full Stack|Shopify|WordPress|csaifulkabir|csaifulkabir@gmail.com).{0,200}/g);

if (matches) {
  fs.writeFileSync('./scratch/context_matches.txt', matches.join('\n===============================\n'));
}

console.log('Matches found:', matches ? matches.length : 0);
