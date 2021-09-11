var ROW_SIZE = null;
var COLUMN_SIZE = null;


window.addEventListener('load', drawTable, false);
function getInput() {
    ROW_SIZE = parseInt(document.getElementById("row").value);
    COLUMN_SIZE = parseInt(document.getElementById("column").value);
    document.getElementById("myTable").hidden=false;
    drawTable();
}

function drawTable() {

    var myTable = "";

    for (var i = 1; i <= ROW_SIZE; i++) {
        myTable += '<tr>';
        for (var j = 1; j <= COLUMN_SIZE; j++) {
            myTable += 
            '<td> ' +
                    ' <p>' + i + ", " + j + '</p> ' +
            '</td>';
        }
        myTable += '</tr>'
    }
    document.getElementById("myTable").innerHTML = myTable;
}

