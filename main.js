import {hindiMapper, hindiScriptRegex, hindiScriptKeyWords, tamilScriptRegex, tamilMapper, gujaratiScriptKeyWords, kannadaScriptRegex, kannadaMapper, marathiScriptRegex, marathiMapper, gujaratiScriptRegex, gujaratiMapper, teluguScriptRegex, teluguMapper } from "./mapping.js";
import {  hindiSampleCode } from "./languages/hindi.js";
import {  tamilSampleCode } from "./languages/tamil.js";
import {  gujaratiSampleCode } from "./languages/gujarati.js";
import {  marathiSampleCode } from "./languages/marathi.js";
import {  teluguSampleCode } from "./languages/telugu.js";
import {  kannadaSampleCode } from "./languages/kannada.js";


const worker = new Worker('worker.js');
let SELECTED_LANGUAGE = 'HINDI';

let sampleCode = '';
if(SELECTED_LANGUAGE === 'HINDI'){
    sampleCode = hindiSampleCode;
}

(function hindiScript(){
    const hindiScriptElem = document.querySelector('.hindiscript-container textarea');
    const javascriptElem = document.querySelector('.javascript-container code');
    const logger = document.querySelector('.logger');
    const hintElem = document.querySelector('.hint-container');
    const likeButton = document.querySelector('.liked-by-btn');
    const likedByText = document.querySelector('.liked-by-text');
    hintElem.style.visibility = "hidden";
    let currentInputText = '';
    hindiScriptElem.value = sampleCode;
    hindiScriptElem.focus();
    getLikes();
    document.querySelector("#language-selection").addEventListener("change",(e)=>{
        SELECTED_LANGUAGE = e.target.value;
        if(SELECTED_LANGUAGE === 'HINDI'){
            sampleCode = hindiSampleCode;
        }
        else if(SELECTED_LANGUAGE === 'KANNADA'){
            sampleCode = kannadaSampleCode;
        }
        else if(SELECTED_LANGUAGE === 'TAMIL'){
            sampleCode = tamilSampleCode;
        }
        else if(SELECTED_LANGUAGE === 'MARATHI'){
            sampleCode = marathiSampleCode;
        }
        else if(SELECTED_LANGUAGE === 'TELUGU'){
            sampleCode = teluguSampleCode;
        }
        else if(SELECTED_LANGUAGE === 'GUJARATI'){
            sampleCode = gujaratiSampleCode;
        }
        hindiScriptElem.value = sampleCode;
        javascriptElem.innerText = '';
    })
    document.querySelector('.run-code-btn').addEventListener('click', function(){
        let hindiCode,  javascriptCode;
        javascriptElem.innerText = '';
        switch(SELECTED_LANGUAGE){
            case 'HINDI':
                hindiCode = hindiScriptElem.value;
                javascriptCode = hindiCode.replace(hindiScriptRegex, hindiMapper);
                break;
            case 'TAMIL':
                hindiCode = hindiScriptElem.value;
                javascriptCode = hindiCode.replace(tamilScriptRegex, tamilMapper)
            case 'TELUGU':
                    hindiCode = hindiScriptElem.value;
                    javascriptCode = hindiCode.replace(teluguScriptRegex, teluguMapper)
            case 'MARATHI':
                hindiCode = hindiScriptElem.value;
                javascriptCode = hindiCode.replace(marathiScriptRegex, marathiMapper)
            case 'GUJARATI':
                hindiCode = hindiScriptElem.value;
                javascriptCode = hindiCode.replace(gujaratiScriptRegex, gujaratiMapper)
            case 'KANNADA':
            hindiCode = hindiScriptElem.value;
            javascriptCode = hindiCode.replace(kannadaScriptRegex, kannadaMapper)
        }
        javascriptElem.innerText = javascriptCode;
        try{
            eval(javascriptCode);
        }
        catch(err){
            logger.innerText = err;
        }
    })

    hindiScriptElem.addEventListener('keyup',function(e){
        if(e.key === "Backspace" || e.key === "Shift" || e.key === ";" || e.key === "Meta"){
            currentInputText = '';
            return;
        }
        if( !e.key.match(/[a-zA-Z]/) || e.shiftKey || e.ctrlKey || e.target.value.length === 0){
            return;
        }
        currentInputText += e.key;
        createHints(currentInputText)
    })

    hintElem.addEventListener('click',e=>{
        const currentTextPosition = hindiScriptElem.value.lastIndexOf(currentInputText);
        const newCodeText = `${hindiScriptElem.value.slice(0,currentTextPosition)}${e.target.innerText} ${hindiScriptElem.value.slice(currentTextPosition+currentInputText.length)}`;
        console.log(newCodeText);
        hindiScriptElem.value = newCodeText;
        hindiScriptElem.focus();
        hideHint();
    })

    hindiScriptElem.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
        console.log(e.pageX, e.pageY);
    })

    function createHints(text){
        worker.postMessage({event:'create-hint',value:{hindiScriptKeyWords,text}});
    }

    function hideHint(){
        if(hintElem?.style?.visibility === "visible"){
            hintElem.style.visibility = "hidden";
        }
    }

    worker.onmessage = (e)=>{
        if(hintElem.style.visibility === "hidden"){
            hintElem.style.visibility = "visible";
        }
        hintElem.innerHTML = e.data;
    }

    likeButton.addEventListener('click',e=>{

    })

    function getLikes(){
        fetch('https://firestore.googleapis.com/v1/projects/public-api-07/databases/(default)/documents/hindiscript-likes/kof97lbQ1IuuvgCHBfOh')
        .then(res=>res.json())
        .then(res=>{
            likedByText.innerText = res?.fields?.likes?.integerValue;
        })
        .catch(err=>{})
    }


})();