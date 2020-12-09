const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
const seen = {}
function syllabify(word) {
    word = word.trim(); 
    const syllables = word.match(syllableRegex);
    return syllables; 
}

//const filename = "10000.txt";
const filename = "test_words.txt";
const lines = require('fs').readFileSync(filename, 'utf-8')
    .split('\r\n')
    .filter(Boolean);

lines.forEach((word,i)=>{
    const syllables = syllabify(word)
    // console.log( i, word, syllables )
    syllables.forEach((syl)=>{
        if ( seen.hasOwnProperty(syl)) {
            seen[syl]++;
        } else {
            seen[syl] = 1;
        }
    });
});

let results = {};
for ( let syllable in seen ) {
    const count = seen[syllable];
    // console.log( count, syllable ); 
    results[syllable] = {
        c:count,
        note:'tbd'
    }; 
}
// write it
console.log("const data={}");
for ( let syllable in results ) {
    const obj = results[syllable]; 
   console.log( `data['${syllable}']=${JSON.stringify(obj)};` ); 
}