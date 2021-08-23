// usage: node scramble.js 'string'
// counterpart to `unscramble.js`
// the purpose is to hide email address and phone numbers from bots
// see https://en.wikipedia.org/wiki/Address_munging

console.log(String.fromCharCode(...Array.from(process.argv[2]).map(c => c.charCodeAt(0)).map(charCode => charCode - 3)));