const args = process.argv.slice(2)[0];

const obfuscate = function(password) {

  let strongPassword = '';
  for (let i = 0; i < password.length; i++) {
    switch (args[i]) {
    case 'a':
      strongPassword += '4';
      break;
    case 'e':
      strongPassword += '3';
      break;
    case 'o':
      strongPassword += "0";
      break;
    case 'l':
      strongPassword += '1';
      break;
    default:
      strongPassword += args[i];
    }
  }
  console.log(strongPassword);
};

obfuscate(args);