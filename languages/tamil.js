const tamilMapping = {
    "ஒப்புக்கொள்":"let",
    "என்றால்":"if",
    "இல்லையெனில்":"else",
    "எழுது":"console.log",
    "தவிர":"for"
}

const tamilSampleCode = `
//மாதிரி code, RUN பொத்தானை அழுத்தவும்
ஒப்புக்கொள் x = 5;
என்றால்(x>2){
    எழுது('x 5 ஐ விட அதிகமாக உள்ளது')
}
இல்லையெனில்{
    எழுது('X 5 ஐ விட சிறியது')
}`;

export {
    tamilMapping,
    tamilSampleCode,
}