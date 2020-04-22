$(document).ready(function() {


        $.ajax({
            url: 'server-step-1.php',
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

});
