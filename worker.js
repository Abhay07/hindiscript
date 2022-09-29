onmessage = (e)=>{
    let listHTML = '';
    e.data.value.hindiScriptKeyWords.forEach(n=>{
        if(n.startsWith(e.data.value.text)){
            listHTML += `<li>${n}</li>`
        }
    })
    postMessage(listHTML);
}