var moduloNameGenerator = require('./lib/nameGenerator.js');
var moduloSalutation = require('./lib/salutation.js');

console.log(moduloSalutation.salutate(moduloNameGenerator.randomName()));

// console.log(moduloNameGenerator.randomName());
// console.log(moduloSalutation.salutate('Juanillo'));