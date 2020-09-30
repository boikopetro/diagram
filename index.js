
//start of diagram
var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
        datasets: [{
            label: 'Вибрана позинія',
            backgroundColor: 'rgb(67, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [32, 15, 55, 22, 20, 30, 45, 36, 29, 47, 33, 56]
        }]
    },

    // Configuration options go here
     options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        },
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Річний графік реалізації'
        }
    }
});

//end of diagram

