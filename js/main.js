$(document).ready(function() {

// ------------- INIZIO STEP 1 ----------------//
        $.ajax({
            url: 'server/server-step-1.php',
            method: 'GET',
            success: function (data) {
                var mesi = ['Gennario', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
                LineChartStep1(mesi, data);
            },
            error: function (err) {
                alert('Errore')
            }
        });
        function LineChartStep1(mesi, data) {
            var ctx = $('#line-chart-step-1');
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: mesi,
                    datasets: [{
                        label: 'Vendite - Step 1',
                        backgroundColor: '#62efff',
                        borderColor: '#008ba3',
                        data: data
                    }]
                },
            });
        };
//-------------- FINE STEP 1 -----------------//

// ------------- INIZIO STEP 2 ----------------//
        $.ajax({
            url: 'server/server-step-2.php',
            method: 'GET',
            success: function (data) {
                var mesi = ['Gennario', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
                var dati = extractData(data);
                var datiLine = dati.line;
                var datiPie = dati.pie;
                LineChartStep2(mesi, datiLine);
                PieChartStep2(datiPie);
            },
            error: function (err) {
                alert('Errore')
            }
        });
        function LineChartStep2(mesi, datiLine) {
            var ctx = $('#line-chart-step-2');
            var chart = new Chart(ctx, {
                type: datiLine.type,
                data: {
                    labels: mesi,
                    datasets: [{
                        label: 'Vendite - Step 2',
                        backgroundColor: '#ef5350',
                        borderColor: '#b61827',
                        data: datiLine.data
                    }]
                },
            });
        };
        function PieChartStep2(datiPie) {
            var ctx = $('#pie-chart-step-2');

            var labelsKey = Object.keys(datiPie.data);
            var dataValue = Object.values(datiPie.data);
            var chart = new Chart(ctx, {
                type: datiPie.type,
                data: {
                    datasets: [{
                        data: dataValue,
                        backgroundColor: ['Red', 'Yellow','Blue', 'Green'],
                        hoverBackgroundColor: ['lightcoral', 'khaki', 'lightblue', 'lightgreen']
                    }],
                    labels: labelsKey
                },
            });
        };
//-------------- FINE STEP 2 -----------------//

        function extractData(data) {
            for (var key in data) {
                if (data[key]['type'] == 'line') {
                    var dataLine = data[key];
                } else {
                    var dataPie = data[key];
                }
            }
            return {
                line: dataLine,
                pie: dataPie
            };
        }



});
