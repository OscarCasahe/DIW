google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart1);

google.charts.load('upcoming', {
    'packages': ['vegachart']
}).then(drawChart2);


google.charts.load('current', {
    'packages': ['geochart'],
});
google.charts.setOnLoadCallback(drawChart3);

google.charts.load('current', {
    packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawChart4);

google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart5);

google.charts.load('current', {
    packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawChart6);






function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'A', 'B', 'C', 'D', 'E', 'F'],
        ['2019/20', 165, 938, 522, 998, 450, 614.6],
        ['2020/21', 135, 1120, 599, 1268, 288, 682],
    ]);

    var options = {
        title: '',
        vAxis: {
            title: 'Sells'
        },
        hAxis: {
            title: ''
        },
        seriesType: 'bars',
        series: {
            5: {
                type: 'line'
            }
        }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('grafica1'));
    chart.draw(data, options);
}

function drawChart2() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'People');

    data.addRows([
        [0, 0],
        [1, 10],
        [2, 23],
        [3, 17],
        [4, 18],
        [5, 9],
        [6, 11],
        [7, 27],
        [8, 33],
        [9, 40],
        [10, 32],
        [11, 35],
        [12, 30],
        [13, 40],
        [14, 42],
        [15, 47],
        [16, 44],
        [17, 48],
        [18, 52],
        [19, 54],
        [20, 42],
        [21, 55],
        [22, 56],
        [23, 57],
        [24, 60],
        [25, 50],
        [26, 52],
        [27, 51],
        [28, 49],
        [29, 53],
        [30, 55],
        [31, 60],
        [32, 61],
        [33, 59],
        [34, 62],
        [35, 65],
        [36, 62],
        [37, 58],
        [38, 55],
        [39, 61],
        [40, 64],
        [41, 65],
        [42, 63],
        [43, 66],
        [44, 67],
        [45, 69],
        [46, 69],
        [47, 70],
        [48, 72],
        [49, 68],
        [50, 66],
        [51, 65],
        [52, 67],
        [53, 70],
        [54, 71],
        [55, 72],
        [56, 73],
        [57, 75],
        [58, 70],
        [59, 68],
        [60, 64],
        [61, 60],
        [62, 65],
        [63, 67],
        [64, 68],
        [65, 69],
        [66, 70],
        [67, 72],
        [68, 75],
        [69, 80]
    ]);

    var options = {
        hAxis: {
            title: 'Time'
        },
        vAxis: {
            title: 'Popularity'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('grafica2'));

    chart.draw(data, options);
}

function drawChart3() {
    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'Ventas');
    data.addColumn('number', 'Clientela');

    data.addRows([
        [{
            v: [8, 0, 0],
            f: '8 am'
        }, 1, .25],
        [{
            v: [9, 0, 0],
            f: '9 am'
        }, 2, .5],
        [{
            v: [10, 0, 0],
            f: '10 am'
        }, 3, 1],
        [{
            v: [11, 0, 0],
            f: '11 am'
        }, 4, 2.25],
        [{
            v: [12, 0, 0],
            f: '12 pm'
        }, 5, 2.25],
        [{
            v: [13, 0, 0],
            f: '1 pm'
        }, 6, 3],
        [{
            v: [14, 0, 0],
            f: '2 pm'
        }, 11, 8],
        [{
            v: [15, 0, 0],
            f: '3 pm'
        }, 8, 5.25],
        [{
            v: [16, 0, 0],
            f: '4 pm'
        }, 8, 7.5],
        [{
            v: [17, 0, 0],
            f: '5 pm'
        }, 8, 10],
    ]);

    var options = {
        title: 'Nivel de clientela y ventas',
        isStacked: true,
        hAxis: {
            title: 'Time of Day',
            format: 'h:mm a',
            viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
            }
        },

    };

    var chart = new google.visualization.ColumnChart(document.getElementById('grafica3'));
    chart.draw(data, options);
}

function drawChart4() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Product A', 7],
        ['Product B', 2],
        ['Product C', 4],
        ['Product D', 4],

    ]);

    var options = {
        title: 'Most Sold Products',
    };

    var chart = new google.visualization.PieChart(document.getElementById('grafica4'));

    chart.draw(data, options);
}

function drawChart5() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Ventas', 'Gastos'],
        ['2018', 600, 400],
        ['2019', 800, 460],
        ['2020', 660, 750],
        ['2021', 1030, 540]
    ]);

    var options = {
        title: 'Company Performance',
        hAxis: {
            title: 'Year',
            titleTextStyle: {
                color: '#333'
            }
        },
        vAxis: {
            minValue: 0
        }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('grafica5'));
    chart.draw(data, options);
}

function drawChart6() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Germany', 300],
        ['Russia', 400],
        ['Italy', 400],
        ['United Kingdom', 500],
        ['France', 500],
        ['Spain', 700]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('grafica6'));

    chart.draw(data, options);
}