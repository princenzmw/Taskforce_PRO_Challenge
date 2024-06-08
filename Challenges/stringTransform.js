const transformString = (str) => {
  let finalString = str;
  if (str.length % 3 === 0) {
    finalString = finalString.replace(/\s+/g, '').split('').reverse().join('');
  }

  if (str.length % 5 === 0) {
    finalString = finalString.split('').map((char) => char.charCodeAt(0)).join(' ');
  }

  return finalString;
};

console.log(transformString('Hamburger'));
console.log(transformString('Pizza'));
console.log(transformString('Chocolate Chip Cookie'));
