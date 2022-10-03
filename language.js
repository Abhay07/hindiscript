const hindiMapping = {
    "maanteHain":"let",
    "yadi":"if",
    "anyatha":"else",
    "likho":"console.log",
    "jabtak":"for"
}

const tamilMapping = {
    "ஒப்புக்கொள்":"let",
    "என்றால்":"if",
    "இல்லையெனில்":"else",
    "எழுது":"console.log",
    "தவிர":"for"
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

const tamilSampleCode = `
//மாதிரி code, RUN பொத்தானை அழுத்தவும்
ஒப்புக்கொள் x = 5;
என்றால்(x>2){
    எழுது('x 5 ஐ விட அதிகமாக உள்ளது')
}
இல்லையெனில்{
    எழுது('X 5 ஐ விட சிறியது')
}
`

export {
    hindiMapping,
    tamilMapping,
    hindiSampleCode,
    tamilSampleCode
}