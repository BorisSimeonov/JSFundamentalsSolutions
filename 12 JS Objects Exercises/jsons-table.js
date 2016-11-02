function solution(input) {
    function escapeHTML(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    let html = `<table>\n`;
    for(let object of input) {
        object = JSON.parse(object);
        html += `    <tr>\n`;
        html += `        <td>${escapeHTML(object["name"])}</td>\n`;
        html += `        <td>${escapeHTML(object["position"])}</td>\n`;
        html += `        <td>${object["salary"]}</td>\n`;
        html += `    <tr>\n`;
    }
    html += `</table>`;

    console.log(html);
}
