const marathiMapping = {
    "मानते_आहेत":"let",
    "तर":"if",
    "नाहीतर":"else",
    "लिहा":"console.log",
    "जोपर्यंत":"for"
}
const marathiSampleCode = `
//नमुना code. RUN बटण दाबा
मानते_आहेत x = 5;
तर(x>2){
    लिहा('x 5 पेक्षा जास्त आहे');
}
नाहीतर{
    लिहा('x 5 पेक्षा लहान आहे');
}
`
export {
    marathiMapping,
    marathiSampleCode,
}