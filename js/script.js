document.addEventListener('DOMContentLoaded', function () {
    var firstTable = document.getElementById('schoolTable');

    for (var i = 0; i < 30; i++) {
        var row = firstTable.insertRow(-1);

        for (var j = 0; j < 4; j++) {
            var cell = row.insertCell(j);
            cell.textContent = 'Якубець Денис';
        }

        row.classList.add('fade-in');
    }

    var secondTable = document.getElementById('SecondSchoolTable');

    for (var i = 0; i < 30; i++) {
        var row = secondTable.insertRow(-1);

        for (var j = 0; j < 4; j++) {
            var cell = row.insertCell(j);
            cell.textContent = 'Якубець Денис';
        }

        row.classList.add('fade-in');
    }
});