function solution(input) {
    let resultArray = [];
    let resultItemBuffer;
    let mainBuffer;
    let domainBuffer;

    for (let i = 0; i < input.length; ++i) {
        mainBuffer = input[i].split('@');
        domainBuffer = mainBuffer[1].split('.');
        /*console.log(mainBuffer);
         console.log(domainBuffer);*/
        resultItemBuffer = `${mainBuffer[0]}.`;
        for (let subDomainItem of domainBuffer) {
            resultItemBuffer += subDomainItem[0];
        }
        resultArray.push(resultItemBuffer);
    }
    console.log(resultArray.join(', '));
}
