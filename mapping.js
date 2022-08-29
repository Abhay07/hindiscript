const mapping = {
    "maanaKi":"let",
    "agar":"if",
    "varna":"else",
    "likho":"console.log",
    "jabtak":"for"
}

const hindiScriptKeyWords = Object.keys(mapping);
let hindiScriptRegex = '';
hindiScriptKeyWords.forEach((n,i)=>{
    if(i === hindiScriptKeyWords.length - 1){
        hindiScriptRegex += `(${n})`;
    }
    else{
        hindiScriptRegex+= `(${n})|`
    }
});
hindiScriptRegex = new RegExp(hindiScriptRegex, 'g');
console.log(hindiScriptRegex);

const mapper = (key) => {
    if(mapping[key]){
        return mapping[key];
    }
  }
export { mapper, hindiScriptRegex, hindiScriptKeyWords };