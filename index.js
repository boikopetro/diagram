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
document.getElementById('diagram_btn').addEventListener('click',showDiagram);
let diagramDisplay = true;
function showDiagram () {
    const showHideDiagram = document.querySelector('.diagram');
    if(diagramDisplay) {
        showHideDiagram.style.display = 'block';
        diagramDisplay = false;
    } else {
        showHideDiagram.style.display = 'none';
        diagramDisplay = true;
    }
}

//random array
document.getElementById('diagram_btn').onclick = function(){
    const max = document.querySelector('.diagramMax').value;
    const min = max * 0.5;
    for(let i = 0; i < 12; i++) {
    randomArray.push(randomInteger(min, max))
    } 
}

function randomInteger(min, max) {
  const rand = min + Math.random() * (max  - min);
  return Math.floor(rand);
}

// auto ordering

document.getElementById('auto_ordering').addEventListener('click',showAutoOrdering);
let autoOrderingDisplay = true;
function showAutoOrdering () {
   const showHideAutoOrdering = document.querySelector('.table');
   if(autoOrderingDisplay) {
        showHideAutoOrdering.style.display = 'block'
        autoOrderingDisplay = false;
   } else {
        showHideAutoOrdering.style.display = 'none'
        autoOrderingDisplay = true;
   }

}