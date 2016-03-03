$(document).foundation();

lohudmetrics({
    'pagename': 'Chartmaker ripoff',
    'author': 'Kai Teoh'
});

var pastedData;

var title = 'Placeholder - Fancy title here';
var source = 'Placeholder - Fancy source here';
var yAxistitle = 'Placeholder - Rainfall (mm)';
var xAxistitle = 'Placeholder - Some title here';
var prefix = '';
var suffix = '';
var chartType = '';
var xAxiscategories = [];


chartOptions = {
    chart: {
        renderTo: 'container',
        type: 'column'
    },
    title: {
        text: title
    },
    subtitle: {
        text: source
    },
    xAxis: {
        title:{
            // enable: true,
            text: xAxistitle,
        },
        // categories: [
        //     'Jan',
        //     'Feb',
        //     'Mar',
        //     'Apr',
        //     'May',
        //     'Jun',
        //     'Jul',
        //     'Aug',
        //     'Sep',
        //     'Oct',
        //     'Nov',
        //     'Dec'
        // ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: yAxistitle
        }
    },
    tooltip: {
        formatter: function() {
            var s = '<b>' + this.x + '</b>';

            $.each(this.points, function (i, point) {
                s += '<br/><span style="color:'+ point.series.color + ';padding:0">' + this.series.name + '</span>: <b>' +
                    prefix + this.y + ' ' + suffix + '</b>';
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
            // tooltip: {
            //     headerFormat: '<b>{series.name}</b><br>',
            //     pointFormat: '{point.x} cm, {point.y} kg'
            // }
        }
    },
    lang: {
        thousandsSep: ',',
        decimalPoint: '.'
    },
    // series: [{
    //     name: 'Tokyo',
    //     data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    // }]
}

chart = new Highcharts.Chart(chartOptions);

$('#title').change("change", function(e){
    title = $('input#title').val();
    console.log(title);
    chart.setTitle({text: title});
});

$('#source').change("change", function(e){
    source = $('input#source').val();
    console.log(source);
    chart.setTitle({text: title}, {text: source});
});

$('#xAxistitle').change("change", function(e){
    xAxistitle = $('input#xAxistitle').val();
    console.log(xAxistitle);
    chart.xAxis[0].setTitle({text: xAxistitle});
});

$('#xAxisStatus').change("change", function(e){
    xAxisStatus = $('#xAxisStatus option:selected').val();
    console.log(xAxisStatus);
    if (xAxisStatus == 'false') {
        chart.xAxis[0].setTitle({enabled: false})
    } else {
        chart.xAxis[0].setTitle({enabled: true})
    }
});

$('#yAxistitle').change("change", function(e){
    yAxistitle = $('input#yAxistitle').val();
    console.log(yAxistitle);
    chart.yAxis[0].setTitle({text: yAxistitle});
});

$('#prefix').change("change", function(e){
    prefix = $('input#prefix').val();
    console.log(prefix);
});

$('#suffix').change("change", function(e){
    suffix = $('input#suffix').val();
    console.log(suffix);
});

$('#chartType').change("change", function(e){
    chartType = $('#chartType option:selected').val();    
    for (c = 0; c < chart.series.length; c++){
        var seriesToken = c-1;
        console.log(chart.series[c]);
        chart.series[c].update({
            type: chartType
        })
    }
});

// $('#chartType').on('change', function() {
//   alert( this.value ); // or $(this).val()
// });

$('#pastedata').change("change", function(e){
    $('#container').highcharts().destroy();
    xAxiscategories.length = 0;
    chart = new Highcharts.Chart(chartOptions);
    var index = 1;

    var pastedData = $('textarea#pastedata').val();

    var papaparsed = Papa.parse(pastedData, {
        delimiter: "",  // auto-detect
        newline: "",    // auto-detect
        header: false,
        dynamicTyping: false,
        preview: 0,
        encoding: "",
        worker: false,
        comments: false,
        step: undefined,
        complete: undefined,
        error: undefined,
        download: false,
        skipEmptyLines: true,
        chunk: undefined,
        fastMode: undefined,
        beforeFirstChunk: undefined,
        withCredentials: undefined
    });

    // These turn into series name = 1800,1900,2012
    // These turn into categories = Africa, America, Asia, Europe, Oceania
    // locations,1800,1900,2012
    // Africa,107,133,1052
    // America,31,156,954
    // Asia,635,947,4250
    // Europe,203,408,740
    // Oceania,2,6,38


    for (var i = 0; i < papaparsed['data'].length; i++) {
        // console.log(papaparsed['data'][i]);

        while (i == 0) {
            for (var k = 0; k < papaparsed['data'][i].length; k++){
                if ( k > 0 ){
                    // console.log(papaparsed['data'][i][k]);
                    // this adds a new series //
                    var data = [];
                    for ( var newi = 0; newi < papaparsed['data'].length; newi++ ){
                        if ( newi > 0) {
                            var cleanval = papaparsed['data'][newi][index].replace(/,/g,'').replace(/\$/g, '');;
                            var converttonum = Number(cleanval);
                            data.push(converttonum);
                            // console.log(data);
                        }
                    }
                    // console.log(index);
                    chart.addSeries({
                        name: papaparsed['data'][i][k],
                        data: data,
                    });
                    index += 1;
                    // console.log(index);
                }
            }
            i++;
        }

        // this loops through each column //
        for (var k = 0; k < papaparsed['data'][i].length; k++){

            // this creates the categories by ignoring //
            // the first row and capturing only the first column // 
            if ( k == 0 && i > 0 ) {
                xAxiscategories.push(papaparsed['data'][i][k]);
                // console.log(xAxiscategories);
            }
            // end category creation //

            else if ( k > 0 && i > 0) {
                // console.log(papaparsed['data'][i]);
                // console.log(papaparsed['data'][i][k]);
            }




        }
    }
    
    chart.xAxis[0].setCategories(xAxiscategories);
});
