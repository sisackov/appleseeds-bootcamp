const colorType = (color) => {
  let darkOrLight = '';
  switch (color.toLowerCase()) {
    case 'yellow':
    case 'pink':
    case 'orange':
      darkOrLight = 'light';
      break;
    case 'blue':
    case 'purple':
    case 'brown':
      darkOrLight = 'Dark';
      break;
    default:
      darkOrLight = 'Unknown';
  }
  return darkOrLight;
};

console.log(colorType('Blue'));
