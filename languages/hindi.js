const hindiMapping = {
    "maanteHain":"let",
    "yadi":"if",
    "anyatha":"else",
    "likho":"console.log",
    "jabtak":"for"
}
const hindiSampleCode = `
//Sample code. RUN ka button dabayein
maanteHain x = 5;
yadi(x>2){
    likho('x 5 se bada hai');
}
anyatha{
    likho('x 5 se chhota hai');
}
`
export {
    hindiMapping,
    hindiSampleCode,
}