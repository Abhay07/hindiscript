import {
    hindiMapping,
    tamilMapping,
    hindiSampleCode,
    tamilSampleCode
} from './language.js';


const hindiScriptKeyWords = Object.keys(hindiMapping);
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

const mapper = (key) => {
    if(hindiMapping[key]){
        return hindiMapping[key];
    }
  }


  const tamilScriptKeyWords = Object.keys(tamilMapping);
  let tamilScriptRegex = '';
  tamilScriptKeyWords.forEach((n,i)=>{
      if(i === tamilScriptKeyWords.length - 1){
          tamilScriptRegex += `(${n})`;
      }
      else{
          tamilScriptRegex = `(${n})|`
      }
  });
  tamilScriptRegex = new RegExp(tamilScriptRegex, 'g');
  
const tamilMapper = (key) => {
    if(tamilMapping[key]){
        return tamilMapping[key];
    }
}
export { mapper, tamilMapper, hindiScriptRegex, hindiScriptKeyWords, tamilScriptKeyWords, tamilScriptRegex };