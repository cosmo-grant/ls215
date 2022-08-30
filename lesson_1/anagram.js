function anagram(word, list) {
  return list.filter(string => isAnagram(word, string));
}

function isAnagram(word1, word2) {
  return Array.from(word1).sort().join('') === Array.from(word2).sort().join('');
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]