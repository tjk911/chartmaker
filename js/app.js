$(document).foundation();
alert("This is for TESTING purposes only");
lohudmetrics({
    'pagename': 'Chartmaker ripoff',
    'author': 'Kai Teoh'
});

var pastedData;

var title = 'Title here';
var source = 'Subtitle/source here';
var yAxistitle = 'yAxis title here';
var xAxistitle = 'xAxis title here';
var prefix = '';
var suffix = '';
var chartType = $('#chartType option:selected').val();
var xAxiscategories = [];
var seriesdata = [];

if ( chartType == 'column' ) {
    chartOptions = {
        chart: {
            renderTo: 'container',
            type: chartType,
        },
        title: {
            text: title
        },
        subtitle: {
            text: source
        },
        xAxis: {
            categories: xAxiscategories,
            title:{
                text: xAxistitle,
            },
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: yAxistitle
            },
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
            }
        },
        series: seriesdata,
        lang: {
            thousandsSep: ',',
            decimalPoint: '.'
        },
    }
} else if ( chartType == 'line' ) {
    chartOptions = {
        chart: {
            renderTo: 'container',
            type: chartType,
        },
        title: {
            text: title
        },
        subtitle: {
            text: source
        },
        xAxis: {
            categories: xAxiscategories,
            title:{
                text: xAxistitle,
            },
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: yAxistitle
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
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
            align: 'right',
            verticalAlign: 'top',
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
        series: seriesdata,
        lang: {
            thousandsSep: ',',
            decimalPoint: '.'
        },
    }
} else if ( chartType == 'area' ) {
    chartOptions = {
        chart: {
            renderTo: 'container',
            type: chartType,
        },
        title: {
            text: title
        },
        subtitle: {
            text: source
        },
        xAxis: {
            categories: xAxiscategories,
            title:{
                text: xAxistitle,
            },
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: yAxistitle
            },
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
            }
        },
        series: seriesdata,
        lang: {
            thousandsSep: ',',
            decimalPoint: '.'
        },
    }
} else if ( chartType == 'areaspline' ) {
    chartOptions = {
        chart: {
            renderTo: 'container',
            type: chartType,
        },
        title: {
            text: title
        },
        subtitle: {
            text: source
        },
        xAxis: {
            categories: xAxiscategories,
            title:{
                text: xAxistitle,
            },
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: yAxistitle
            },
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
            }
        },
        series: seriesdata,
        lang: {
            thousandsSep: ',',
            decimalPoint: '.'
        },
    }
} else if ( chartType == 'scatter' ) {
    chartOptions = {
        chart: {
            renderTo: 'container',
            type: chartType,
        },
        title: {
            text: title
        },
        subtitle: {
            text: source
        },
        xAxis: {
            categories: xAxiscategories,
            title:{
                text: xAxistitle,
            },
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: yAxistitle
            },
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
            }
        },
        series: seriesdata,
        lang: {
            thousandsSep: ',',
            decimalPoint: '.'
        },
    }
} else if ( chartType == 'spline' ) {
    chartOptions = {
        chart: {
            renderTo: 'container',
            type: chartType,
        },
        title: {
            text: title
        },
        subtitle: {
            text: source
        },
        xAxis: {
            categories: xAxiscategories,
            title:{
                text: xAxistitle,
            },
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: yAxistitle
            },
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
            }
        },
        series: seriesdata,
        lang: {
            thousandsSep: ',',
            decimalPoint: '.'
        },
    }
}

if (chartOptions == null) {
    chartOptions = indexOpt;
}

chart = new Highcharts.Chart(chartOptions);

rebuild = function(){
    new Highcharts.Chart(chartOptions);
}

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
    // rebuild();
});

$('#pastedata').change("change", function(e){
    $('#container').highcharts().destroy();
    xAxiscategories.length = 0;
    seriesdata.length = 0;

    

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
                    // var tempseries = "name: "+ papaparsed['data'][i][k] +", data:"+data+",";
                    // console.log(tempseries);
                    seriesdata.push({
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

        }
    }
    chart.xAxis[0].setCategories(xAxiscategories);
    // var obj = jQuery.parseJSON(chart);
    // $('#rendered').text(obj);
    var displayEl = document.getElementById("rendered");
    // var test = $("div").remove( ".formelement").html();
    // var test = $("input:not(:checked)").html();
    // var test = $("div:not(#form)").html();
    // displayEl.innerHTML = test;
});

function generateHTML(){
    // indexOpt = chartOptions;
    // $("div").remove(".formelement").html();
    // $("#banner").remove();
    // $("button").remove();
    // $("div").removeClass( "large-6" ).addClass( "large-12" );
    // chart.reflow();
    // var displayEl = document.getElementById("rendered");
    // var test = $('html').html();
    $.ajax({
        type: "POST",
        url: "write.php",
        data:{
            chartType: chartType,
            title: title,
            source: source,
            yAxistitle: yAxistitle,
            xAxistitle: xAxistitle,
            prefix: prefix,
            suffix: suffix,
            xAxiscategories: JSON.stringify(xAxiscategories),
            seriesdata: JSON.stringify(seriesdata),
        },
        success: function(data) {
          console.log(data);
        }
    })

};
