function multiplicationTable(input) {
    let size = Number(input[0]);
    let rowHTML;
    console.log('<table border="1">');
    let tag, closingTag;
    let currentValue;

    for (let row = 0; row <= size; ++row) {
        rowHTML = '\t<tr>';
        for (let col = 0; col <= size; ++col) {
            if (row == 0 || col == 0) {
                tag = '<th>';
                closingTag = '</th>';
            }
            else {
                tag = '<td>';
                closingTag = '</td>';
            }

            currentValue = getCurrent(row, col);
            rowHTML += (tag + currentValue + closingTag);
        }
        rowHTML += '</tr>';
        console.log(rowHTML);
    }
    console.log('</table>');

    function getCurrent(row, col) {
        if (row == 0) {
            return (col == 0) ? 'x' : col;
        }
        else {
            return (col == 0) ? row : row * col;
        }
    }
}
