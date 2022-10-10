const kannadaMapping = {
    "ಒಪ್ಪಿಕೊಳ್ಳಿ":"let",
    "ಒಂದು_ವೇಳೆ":"if",
    "ಬೇರೆ":"else",
    "ಬರೆಯಿರಿ":"console.log",
    "ಜಬ್ತ_ತಕ್":"for"
}
const kannadaSampleCode = `
//Sample code. RUN ka button dabayein
ಒಪ್ಪಿಕೊಳ್ಳಿ x = 5;
ಒಂದು_ವೇಳೆ(x>2){
    ಬರೆಯಿರಿ('x 5 ಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿರುತ್ತದೆ');
}
ಬೇರೆ{
    ಬರೆಯಿರಿ('x 5 ಕ್ಕಿಂತ ಚಿಕ್ಕದಾಗಿದೆ');
}
`
export {
    kannadaMapping,
    kannadaSampleCode,
}
