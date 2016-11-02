function solution(input) {
    function escapeHTML(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    let inputLines = JSON.parse(input);
    let keys = Object.keys(inputLines[0]);
    let array = {};
    for (let key of keys) {
        array[key] = [];
    }
    ;

    for (let obj of inputLines) {
        for (let key of keys) {
            if (typeof obj[key] == 'string') {
                array[key].push(escapeHTML(obj[key]));
            } else {
                array[key].push(obj[key]);
            }
        }
        ;
    }
    let result = `<table>\n`;
    result += `  <tr>`;
    for (let key of keys) {
        result += `<th>${key}</th>`;
    }
    result += `</tr>\n`;
    for (let idx = 0; idx < array[keys[0]].length; ++idx) {
        result += `  <tr>`;
        for (let key of keys) {
            result += `<td>${array[key][idx]}</td>`;
        }
        result += `</tr>\n`;
    }
    result += `</table>`;

    console.log(result);
}
