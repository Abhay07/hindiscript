import { hindiMapping } from './languages/hindi.js';
import { tamilMapping } from './languages/tamil.js';
import { teluguMapping } from './languages/telugu.js';
import { kannadaMapping } from './languages/kannada.js';
import { gujaratiMapping } from './languages/gujarati.js';
import { marathiMapping } from './languages/marathi.js';

//Hindi Regex
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

const hindiMapper = (key) => {
    if(hindiMapping[key]){
        return hindiMapping[key];
    }
  }


  //Tamil Regex
  const tamilScriptKeyWords = Object.keys(tamilMapping);
  let tamilScriptRegex = '';
  tamilScriptKeyWords.forEach((n,i)=>{
      if(i === (tamilScriptKeyWords.length - 1)){
          tamilScriptRegex += `(${n})`;
      }
      else{
          tamilScriptRegex += `(${n})|`
      }
  });
  tamilScriptRegex = new RegExp(tamilScriptRegex, 'g');
  
const tamilMapper = (key) => {
    if(tamilMapping[key]){
        return tamilMapping[key];
    }
}

//Telugu Regex
const teluguKeyWords = Object.keys(teluguMapping);
let teluguScriptRegex = '';
teluguKeyWords.forEach((n,i)=>{
    if(i === (teluguKeyWords.length - 1)){
        teluguScriptRegex += `(${n})`;
    }
    else{
        teluguScriptRegex += `(${n})|`
    }
});
teluguScriptRegex = new RegExp(teluguScriptRegex, 'g');

const teluguMapper = (key) => {
  if(teluguMapping[key]){
      return teluguMapping[key];
  }
}

//Gujarati Regex
const gujaratiScriptKeyWords = Object.keys(gujaratiMapping);
let gujaratiScriptRegex = '';
gujaratiScriptKeyWords.forEach((n,i)=>{
    if(i === (gujaratiScriptKeyWords.length - 1)){
        gujaratiScriptRegex += `(${n})`;
    }
    else{
        gujaratiScriptRegex += `(${n})|`
    }
});
gujaratiScriptRegex = new RegExp(gujaratiScriptRegex, 'g');

const gujaratiMapper = (key) => {
  if(gujaratiMapping[key]){
      return gujaratiMapping[key];
  }
}

//Marathi Regex
const marathiKeyWords = Object.keys(marathiMapping);
let marathiScriptRegex = '';
marathiKeyWords.forEach((n,i)=>{
    if(i === (marathiKeyWords.length - 1)){
        marathiScriptRegex += `(${n})`;
    }
    else{
        marathiScriptRegex += `(${n})|`
    }
});
marathiScriptRegex = new RegExp(marathiScriptRegex, 'g');

const marathiMapper = (key) => {
  if(marathiMapping[key]){
      return marathiMapping[key];
  }
}

//Kannada Regex
const kannadaKeyWords = Object.keys(kannadaMapping);
let kannadaScriptRegex = '';
kannadaKeyWords.forEach((n,i)=>{
    if(i === (kannadaKeyWords.length - 1)){
        kannadaScriptRegex += `(${n})`;
    }
    else{
        kannadaScriptRegex += `(${n})|`
    }
});
kannadaScriptRegex = new RegExp(kannadaScriptRegex, 'g');

const kannadaMapper = (key) => {
  if(kannadaMapping[key]){
      return kannadaMapping[key];
  }
}


export { hindiScriptRegex, 
    hindiScriptKeyWords, 
    tamilScriptKeyWords, 
    tamilScriptRegex, 
    kannadaScriptRegex, 
    kannadaKeyWords, 
    teluguScriptRegex, 
    teluguKeyWords, 
    marathiScriptRegex, 
    marathiKeyWords,
    gujaratiScriptRegex, 
    gujaratiScriptKeyWords, 
    tamilMapper, 
    hindiMapper,
    gujaratiMapper,
    kannadaMapper,
    teluguMapper,
    marathiMapper
};