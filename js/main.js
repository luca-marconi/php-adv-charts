$(document).ready(function() {


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

        $.ajax({
            url: 'server/server-step-2.php',
            method: 'GET',
            success: function (data) {
                var mesi = ['Gennario', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
                LineChartStep2(mesi, data);
                PieChartStep2(data);
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

        function LineChartStep2(mesi, data) {
            var ctx = $('#line-chart-step-2');
            var chart = new Chart(ctx, {
                type: data.fatturato['type'],
                data: {
                    labels: mesi,
                    datasets: [{
                        label: 'Vendite - Step 2',
                        backgroundColor: '#ef5350',
                        borderColor: '#b61827',
                        data: data.fatturato['data']
                    }]
                },
            });
        };

        function PieChartStep2(data) {
            var ctx = $('#pie-chart-step-2');
            var graficoAgenti = data.fatturato_by_agent;
            var labelsKey = Object.keys(graficoAgenti.data);
            var dataValue = Object.values(graficoAgenti.data);
            var chart = new Chart(ctx, {
                type: data.fatturato_by_agent['type'],
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



});
