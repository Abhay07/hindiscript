const teluguMapping = {
    "ఒప్పుకుంటారు":"let",
    "ఉంటే":"if",
    "లేకపోతే":"else",
    "వ్రాయడానికి":"console.log",
    "జబ్త_తక్":"for"
}
const teluguSampleCode = `
//Sample code. RUN ka button dabayein
ఒప్పుకుంటారు x = 5;
ఉంటే(x>2){
    వ్రాయడానికి('x 5 కంటే ఎక్కువ');
}
లేకపోతే{
    వ్రాయడానికి('x 5 కంటే చిన్నది');
}
`
export {
    teluguMapping,
    teluguSampleCode,
}
