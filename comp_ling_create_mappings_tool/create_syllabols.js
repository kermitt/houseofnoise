const big_list_of_files = [
"a48.mp3",
"a49.mp3",
"a50.mp3",
"a51.mp3",
"a52.mp3",
"a53.mp3",
"a54.mp3",
"a55.mp3",
"a56.mp3",
"a57.mp3",
"a65.mp3",
"a66.mp3",
"a67.mp3",
"a68.mp3",
"a69.mp3",
"a70.mp3",
"a71.mp3",
"a72.mp3",
"a73.mp3",
"a74.mp3",
"a75.mp3",
"a76.mp3",
"a77.mp3",
"a78.mp3",
"a79.mp3",
"a80.mp3",
"a81.mp3",
"a82.mp3",
"a83.mp3",
"a84.mp3",
"a85.mp3",
"a86.mp3",
"a87.mp3",
"a88.mp3",
"a89.mp3",
"a90.mp3",
"b49.mp3",
"b50.mp3",
"b52.mp3",
"b53.mp3",
"b54.mp3",
"b56.mp3",
"b57.mp3",
"b66.mp3",
"b67.mp3",
"b68.mp3",
"b69.mp3",
"b71.mp3",
"b72.mp3",
"b73.mp3",
"b74.mp3",
"b76.mp3",
"b79.mp3",
"b80.mp3",
"b81.mp3",
"b83.mp3",
"b84.mp3",
"b86.mp3",
"b87.mp3",
"b89.mp3",
"b90.mp3",
"crow3.wav",
"dog1.wav",
"FernhillPark.wav",
"FoodVillaMarket.wav",
"guitar1.mp3",
"guitar2.wav",
"guitar3.wav",
"guitar4.wav",
"guitar5.wav",
"guitar6.wav",
"guitar7.wav",
"guitar8.wav",
"NE33rdAve.wav",
"neeya.wav"
];



const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
const seen = {}
function syllabify(word) {
    word = word.trim();
    const syllables = word.match(syllableRegex);
    return syllables;
}

const filename = "10000.txt";
//const filename = "test_words.txt";
const lines = require('fs').readFileSync(filename, 'utf-8')
    .split('\r\n')
    .filter(Boolean);

lines.forEach((word, i) => {
    const syllables = syllabify(word)
    // console.log( i, word, syllables )
    if (i < 100001) {
        if (syllables != null) {
            syllables.forEach((syl) => {
                if (seen.hasOwnProperty(syl)) {
                    seen[syl]++;
                } else {
                    seen[syl] = 1;
                }
            });
        }
    }
});

let results = {};
for (let syllable in seen) {
    const count = seen[syllable];
    // console.log( count, syllable ); 
    results[syllable] = {
        c: count
    };
}
// write it
console.log("const data={}");
let j = 0;
let index = 0; 
for (let syllable in results) {
    let result = results[syllable];
    result['f'] = big_list_of_files[index];
    if ( j % big_list_of_files.length === 0 && j > 0 ) {
        index++;
    } 
    console.log(`data['${syllable}']=${JSON.stringify(result)};`);
    j++;

}