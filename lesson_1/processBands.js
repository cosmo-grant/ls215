let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data.forEach(band => {
    band.country = 'Canada';
    band.name = band.name
      .split(' ')
      .map(capitalize)
      .join(' ');
    band.name = band.name.replaceAll(/\./g, '');
  })
  return data;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1);
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]