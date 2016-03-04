<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$dir = 'charts';

//  // create new directory with 744 permissions if it does not exist yet
//  // owner will be the user/group the PHP script is run under
 if ( !file_exists($dir) ) {
     $oldmask = umask(0);  // helpful when used in linux server  
     mkdir ($dir, 0744);
 }
 print_r($_POST);

// file_put_contents('new.html', urldecode($_POST$_POST['dom']));
$chartType = $_POST['chartType'];
echo $chartType;
$title = $_POST['title'];
echo $title;
$source = $_POST['source'];
echo $source;
$yAxistitle = $_POST['yAxistitle'];
echo $yAxistitle;
$xAxistitle = $_POST['xAxistitle'];
echo $xAxistitle;
$prefix = $_POST['prefix'];
echo $prefix;
$suffix = $_POST['suffix'];
echo $suffix;
$xAxiscategories = $_POST['xAxiscategories'];
echo $xAxiscategories;
$seriesdata = $_POST['seriesdata'];
echo $seriesdata;

$template = <<<EOD
<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{$title}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.0/foundation.min.css" />
    <link rel="stylesheet" href="../css/app.css" />
  </head>
  <body>
    <div class="row">
        <div class="large-12 columns">
            <div id="container"></div>
        </div>
    </div>
    <script src="../js/vendor/jquery.min.js"></script>
    <script src="../js/vendor/what-input.min.js"></script>
    <script src="../js/foundation.min.js"></script>
    <script src="../js/lohudanalytics.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="../js/papaparse.js"></script>
    <script src="../js/underscore.js"></script>
    <script type="text/javascript">
        $(document).foundation();
        lohudmetrics({
            'pagename': '{$title}',
            'author': 'Kai Teoh'
        });
        chartOptions = {
            chart: {
                renderTo: 'container',
                type: '{$chartType}',
            },
            title: {
                text: '{$title}'
            },
            subtitle: {
                text: '{$source}'
            },
            xAxis: {
                categories: {$xAxiscategories},
                title:{
                    text: '{$xAxistitle}',
                },
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: '{$yAxistitle}'
                },
            },
            tooltip: {
                formatter: function() {
                    var s = '<b>' + this.x + '</b>';

                    $.each(this.points, function (i, point) {
                        s += '<br/><span style="color:'+ point.series.color + ';padding:0">' + this.series.name + '</span>: <b>' +
                            '{$prefix}' + this.y + ' ' + '{$suffix}' + '</b>';
                    });

                    return s;
                },
                shared: true,
                useHTML: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                borderWidth: 1
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                }
            },
            series: {$seriesdata},
            lang: {
                thousandsSep: ',',
                decimalPoint: '.'
            },
        }
        chart = new Highcharts.Chart(chartOptions);
    </script>
  </body>
</html>
EOD;
$string = preg_replace('/\s+/', '', $title);
$lowercase = strtolower($string);
file_put_contents($dir.'/'.$lowercase.'.html', $template);

?>