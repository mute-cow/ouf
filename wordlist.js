const specialWordList = [
  "\\w*ma-ti\\w*|ke-mati\\w+",
  "sek-s\\w*|se-ks\\w*",
  "\\w*rogo-l\\w*|\\w*ro-gol\\w*",
  "\\w*tang-kap\\w*",
  "\\w*seng-gama",
  "mang-sa",
  "\\w*ten-tera\\w*",
  "\\w+-nuh",
  "\\w+-rang",
  "\\w+-r\\w+ntak|\\w+ron-ta\\w+",
  "tem-ba\\w+",
  "a-rak",
  "whis-key",
  "da-dah",
  "la-nun",
  "\\w*cacat-",
  "jena-zah",
  "ma-yat\\w*",
  "menyem-belih",
  "hit-ler",
  "na-zi",
  "\\w*ha-pus\\w*",
  "rei-ch"
];

let spWordList = "";

specialWordList.forEach(row => {
  spWordList += `${row}|`;
});

if (spWordList.length > 0)
  spWordList = spWordList.substring(0, spWordList.length - 1);

const wordList = [
  ["(?<=[a-z])0(?=[a-z])", "0", "o"],
  ["(?<=[a-z])1(?=[a-z])", "1", "i"],
  ["(?<=[a-z])3(?=[a-z])", "3", "e"],
  ["(?<=[a-z])4(?=[a-z])", "4", "a"],
  ["(?<=[a-z])!(?=[a-z])", "!", "i"],
  ["\\w*μ\\w*", "µ", "u"],
  ["\\w*σ\\w*", "σ", "o"],
  ["\\w*ε\\w*", "ε", "e"],
  ["\\w*η\\w*", "η", "n"],
  ["\\w*α\\w*", "α", "a"],
  ["\\w*ι\\w*", "ι", "i"],
  ["\\w*-[aeiou]\\w*", "-", ""],
  ["\\w*[αμεηισ]\\w*", "1", "i"],
  ["\\w*(?<![aeiouy0-9])v(?![aeiouy0-9])\\w*", "v", "u"],
  ["\\w*(?<![aeiouy0-9])V(?![aeiouy0-9])\\w*", "V", "U"],
  ["ma4t!", "!", "i"],
  [spWordList, "-", ""]
];

const exWordList = [
  "sultan-\\w+",
  "sheikh-\\w+",
  "\\d+-an",
  "anti-\\w+"
];
