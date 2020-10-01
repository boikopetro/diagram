const randomArray = [];
//start of diagram
const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
        datasets: [{
            label: 'Вибрана позинія',
            backgroundColor: 'rgb(67, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: randomArray
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

// show/hide button
document.getElementById('btn').addEventListener('click',showDiv);
let display = true;
function showDiv () {
    const isShow = document.getElementById('diagram')   ;
    if(display) {
        isShow.style.display = 'block';
        display = false;
    } else {
        isShow.style.display = 'none';
        display = true;
    }
}

//random array
document.getElementById('btn').onclick = function(){
    const min = 0;
    const max = document.querySelector('.max').value;
    for(let i = 0; i < 12; i++) {
    randomArray.push(randomInteger(min, max))
    } 
}

function randomInteger(min, max) {
  const rand = min + Math.random() * (max  - min);
  return Math.floor(rand);
}