import {mapper, hindiScriptRegex, hindiScriptKeyWords} from "./mapping.js";
const worker = new Worker('worker.js');

const sampleCode = `
//Sample code. RUN ka button dabayein


maanteHain x = 5;
yadi(x>2){
    likho('x 5 se bada hai');
}
anyatha{
    likho('x 5 se chhota hai');
}
`;

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
    document.querySelector('.run-code-btn').addEventListener('click', function(){
        const hindiCode = hindiScriptElem.value;
        const javascriptCode = hindiCode.replace(hindiScriptRegex, mapper);
        console.log(javascriptCode)
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

    // console.log = function(text){
    //     logger.innerText = text;
    // }

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