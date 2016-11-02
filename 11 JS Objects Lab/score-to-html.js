function solution([input]) {
    let htmlResult = "<table>\n  <tr><th>name</th><th>score</th></tr>\n";
    let jsonArray = JSON.parse(input);
    for (let object of jsonArray)
        htmlResult += `  <tr><td>${escapeHTML(object['name'])}</td><td>${object['score']}</td></tr>\n`;
    htmlResult += "</table>";
    console.log(htmlResult);


    function escapeHTML(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
