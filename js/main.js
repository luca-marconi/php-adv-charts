$(document).ready(function() {

// ------------- INIZIO STEP 1 ----------------//
        // $.ajax({
        //     url: 'server/server-step-1.php',
        //     method: 'GET',
        //     success: function (data) {
        //         var mesi = ['Gennario', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
        //         LineChartStep1(mesi, data);
        //     },
        //     error: function (err) {
        //         alert('Errore')
        //     }
        // });
        // function LineChartStep1(mesi, data) {
        //     var ctx = $('#line-chart-step-1');
        //     var chart = new Chart(ctx, {
        //         type: 'line',
        //         data: {
        //             labels: mesi,
        //             datasets: [{
        //                 label: 'Vendite - Step 1',
        //                 backgroundColor: '#62efff',
        //                 borderColor: '#008ba3',
        //                 data: data
        //             }]
        //         },
        //     });
        // };
//-------------- FINE STEP 1 -----------------//

// ------------- INIZIO STEP 2 ----------------//
        // $.ajax({
        //     url: 'server/server-step-2.php',
        //     method: 'GET',
        //     success: function (data) {
        //         var mesi = ['Gennario', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
        //         var dati = extractDataStep2(data);
        //         var datiLine = dati.line;
        //         var datiPie = dati.pie;
        //         LineChartStep2(mesi, datiLine);
        //         PieChartStep2(datiPie);
        //     },
        //     error: function (err) {
        //         alert('Errore')
        //     }
        // });
        // function LineChartStep2(mesi, datiLine) {
        //     var ctx = $('#line-chart-step-2');
        //     var chart = new Chart(ctx, {
        //         type: datiLine.type,
        //         data: {
        //             labels: mesi,
        //             datasets: [{
        //                 label: 'Vendite - Step 2',
        //                 backgroundColor: '#62efff',
        //                 borderColor: '#008ba3',
        //                 data: datiLine.data
        //             }]
        //         },
        //     });
        // };
        // function PieChartStep2(datiPie) {
        //     var ctx = $('#pie-chart-step-2');
        //     var labelsKey = Object.keys(datiPie.data);
        //     var dataValue = Object.values(datiPie.data);
        //     var chart = new Chart(ctx, {
        //         type: datiPie.type,
        //         data: {
        //             datasets: [{
        //                 data: dataValue,
        //                 backgroundColor: ['#e53935', '#8e24aa','#00897b', '#ffb300'],
        //                 hoverBackgroundColor: ['#ff6f60', '#c158dc', '#4ebaaa', '#ffe54c']
        //             }],
        //             labels: labelsKey
        //         },
        //     });
        // };
        //
        // function extractDataStep2(data) {
        //     for (var key in data) {
        //         if (data[key]['type'] == 'line') {
        //             var dataLine = data[key];
        //         } else {
        //             var dataPie = data[key];
        //         }
        //     }
        //     return {
        //         line: dataLine,
        //         pie: dataPie,
        //     };
        // }
//-------------- FINE STEP 2 -----------------//

// ------------- INIZIO STEP 3 JS----------------//
        $.ajax({
            url: 'server/server-step-3.php',
            method: 'GET',
            success: function (data) {
                var mesi = ['Gennario', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
                var dati = extractDataStep3(data);
                var datiLineGuest = dati.lineGuest;
                var datiPieEmployee = dati.pieEmployee;
                var datiLineClevel = dati.lineClevel;

                LineChartStep3(mesi, datiLineGuest);
                PieChartStep3(datiPieEmployee);
                MultiLineChartStep3(mesi, datiLineClevel);
            },
            error: function (err) {
                alert('Errore')
            }
        });
        function LineChartStep3(mesi, datiLineGuest) {
            var ctx = $('#line-chart-step-3');
            var chart = new Chart(ctx, {
                type: datiLineGuest.type,
                data: {
                    labels: mesi,
                    datasets: [{
                        label: 'Vendite - Step 3',
                        backgroundColor: '#62efff',
                        borderColor: '#008ba3',
                        data: datiLineGuest.data
                    }],
                },
            });
        };
        function PieChartStep3(datiPieEmployee) {
            var ctx = $('#pie-chart-step-3');
            var labelsKey = Object.keys(datiPieEmployee.data);
            var dataValue = Object.values(datiPieEmployee.data);
            var chart = new Chart(ctx, {
                type: datiPieEmployee.type,
                data: {
                    datasets: [{
                        data: dataValue,
                        backgroundColor: ['#e53935', '#8e24aa','#00897b', '#ffb300'],
                        hoverBackgroundColor: ['#ff6f60', '#c158dc', '#4ebaaa', '#ffe54c']
                    }],
                    labels: labelsKey
                },
            });
        };
        function MultiLineChartStep3(mesi, datiLineClevel) {
            var ctx = $('#multiline-chart-step-3');
            var labelsKey = Object.keys(datiLineClevel.data);
            var dataValue = Object.values(datiLineClevel.data);
            var chart = new Chart(ctx, {
                type: datiLineClevel.type,
                data: {
                    labels: mesi,
                    datasets: [{
                        label: labelsKey[0],
                        borderColor: '#b61827',
                        data: dataValue[0]
                    },
                    {
                        label: labelsKey[1],
                        borderColor: '#0288d1',
                        data: dataValue[1]
                    },
                    {
                        label: labelsKey[2],
                        borderColor: '#43a047',
                        data: dataValue[2]
                    }],
                },
            });
        };

        function extractDataStep3(data) {
            for (var key in data) {
                if (data[key]['access'] == 'guest') {
                    var dataLineGuest = data[key];
                } else if (data[key]['access'] == 'employee'){
                    var dataPieEmployee = data[key];
                } else {
                    var dataLineClevel = data[key];
                }
            }
            return {
                lineGuest: dataLineGuest,
                pieEmployee: dataPieEmployee,
                lineClevel: dataLineClevel
            };
        }
//-------------- FINE STEP 3 JS -----------------//



});
