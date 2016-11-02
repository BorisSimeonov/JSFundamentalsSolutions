function solution(input) {
    let textLine;
    console.log(`<ul>`);
    for (let i = 0; i < input.length; ++i) {
        textLine = input[i];
        textLine = textLine.replace(/&/g, '&amp;');
        textLine = textLine.replace(/"/g, '&quot;');
        textLine = textLine.replace(/</g, '&lt;');
        textLine = textLine.replace(/>/g, '&gt;');
        console.log(`  <li>${textLine}</li>`);
    }
    console.log(`</ul>`);
}
