<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <title></title>
    </head>
    <body>

        <button><a href="http://localhost:8888/boolean/PHP/php-adv-charts/">Javascript Version</a></button>
    <div class="container">

        <?php $accesso = $_GET['livello']; ?>
        <h2>Versione PHP</h2>
        <div class="container-step-3">
                <?php if (($accesso == 'guest') || ($accesso == '')) { ?>
                    <canvas id="php-line-chart-step-3"></canvas>
                <?php } elseif ($accesso == 'employee') { ?>
                    <canvas id="php-line-chart-step-3"></canvas>
                    <canvas id="php-pie-chart-step-3"></canvas>
                <?php } elseif ($accesso == 'clevel') { ?>
                    <canvas id="php-line-chart-step-3"></canvas>
                    <canvas id="php-pie-chart-step-3"></canvas>
                    <canvas id="php-multiline-chart-step-3"></canvas>
                <?php }; ?>
        </div>
    </div>

        <script src="js/main_ver_php.js" charset="utf-8"></script>
    </body>
</html>
