$(document).ready(function() {

    // -------------INIZIO GRAFICO 1----------------//
    $.ajax({
        url: 'server/fatturato.php',
        method: 'GET',
        success: function (data) {
            var mesi = ['Gennario', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            var tipoGrafico = data[0];
            var dataGrafico = data[1];
            var accessoGrafico = data[2];
            LineChartStep3(mesi, tipoGrafico, dataGrafico);
        },
        error: function (err) {
            alert('Errore')
        }
    });
    function LineChartStep3(mesi, tipoGrafico, dataGrafico) {
        var ctx = $('#php-line-chart-step-3');
        var chart = new Chart(ctx, {
            type: tipoGrafico,
            data: {
                labels: mesi,
                datasets: [{
                    label: 'Vendite - Step 3',
                    backgroundColor: '#62efff',
                    borderColor: '#008ba3',
                    data: dataGrafico
                }],
            },
        });
    };
    //-------------- FINE GRAFICO 1 -----------------//

    // -------------INIZIO GRAFICO 2----------------//
    $.ajax({
        url: 'server/fatturato_by_agent.php',
        method: 'GET',
        success: function (data) {
            var tipoGrafico = data[0];
            var labelGrafico = data[1];
            var dataGrafico = data[2];
            var accessGrafico = data[3];
            PieChartStep3(tipoGrafico, labelGrafico, dataGrafico);
        },
        error: function (err) {
            alert('Errore')
        }
    });
    function PieChartStep3(tipoGrafico, labelGrafico, dataGrafico) {
        var ctx = $('#php-pie-chart-step-3');
        var chart = new Chart(ctx, {
            type: tipoGrafico,
            data: {
                datasets: [{
                    data: dataGrafico,
                    backgroundColor: ['#e53935', '#8e24aa','#00897b', '#ffb300'],
                    hoverBackgroundColor: ['#ff6f60', '#c158dc', '#4ebaaa', '#ffe54c']
                }],
                labels: labelGrafico
            },
        });
    };
    //-------------- FINE GRAFICO 2 -----------------//

    //-------------- INIZIO GRAFICO 3 -----------------//
    $.ajax({
        url: 'server/team_efficiency.php',
        method: 'GET',
        success: function (data) {
            var mesi = ['Gennario', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            var tipoGrafico = data[0];
            var labelGraficoTeam1 = data[1][0];
            var labelGraficoTeam2 = data[1][1];
            var labelGraficoTeam3 = data[1][2];
            var dataGraficoTeam1 = data[2][0];
            var dataGraficoTeam2 = data[2][1];
            var dataGraficoTeam3 = data[2][2];
            var accessGrafico = data[3];
            MultiLineChartStep3(mesi, tipoGrafico, labelGraficoTeam1, labelGraficoTeam2, labelGraficoTeam3, dataGraficoTeam1, dataGraficoTeam2, dataGraficoTeam3, accessGrafico);
        },
        error: function (err) {
            alert('Errore')
        }
    });
    function MultiLineChartStep3(mesi, tipoGrafico, labelGraficoTeam1, labelGraficoTeam2, labelGraficoTeam3, dataGraficoTeam1, dataGraficoTeam2, dataGraficoTeam3, accessGrafico) {
        var ctx = $('#php-multiline-chart-step-3');
        var chart = new Chart(ctx, {
            type: tipoGrafico,
            data: {
                labels: mesi,
                datasets: [{
                    label: labelGraficoTeam1,
                    borderColor: '#b61827',
                    data: dataGraficoTeam1
                },
                {
                    label: labelGraficoTeam2,
                    borderColor: '#0288d1',
                    data: dataGraficoTeam2
                },
                {
                    label: labelGraficoTeam3,
                    borderColor: '#43a047',
                    data: dataGraficoTeam3
                }],
            },
        });
    };
    //-------------- FINE GRAFICO 3 -----------------//
});
