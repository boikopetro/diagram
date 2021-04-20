const randomArray = [];

// start of diagram
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
// end of diagram

// show/hide diagram button
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

// random array
document.getElementById('diagram_btn').addEventListener('click', diagramValues) 
function diagramValues (){
    const max = document.querySelector('.remainder').value;
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
   const showHideAutoOrdering = document.querySelector('.storage');
   if(autoOrderingDisplay) {
        showHideAutoOrdering.style.display = 'block'
        autoOrderingDisplay = false;
   } else {
        showHideAutoOrdering.style.display = 'none'
        autoOrderingDisplay = true;
   }
}

// order_done window

document.getElementById('order_done_btn').addEventListener('click', timer);
let orderedDisplay = true;
const showHideOrderDone = document.querySelector('.order_done');
function ordered () {
    if(orderedDisplay) {
        showHideOrderDone.style.display = 'block'
        orderedDisplay = false;
    } 
}

document.getElementById('close_window').addEventListener('click', closeWindow)
function closeWindow () {
    if(orderedDisplay===false) {
        showHideOrderDone.style.display = 'none'
        orderedDisplay = true;
        timer()
    }
}

function timer () {
    alert('Збережено!')
    return setTimeout(ordered, 5000)
}



// order counter
document.getElementById('order_done_btn').addEventListener('click', orderCounter);
function orderCounter () {
    const minValue = document.querySelector('.min').value;
    const maxValue = document.querySelector('.max').value;
    const remainderValue = document.querySelector('.remainder').value;
    const storageRemainderValue = document.querySelector('.storageRemainder').value;
    const orderedValue = document.querySelector('.orderedPosition');
    const toOrder = maxValue - remainderValue;
    if (remainderValue < minValue) {
        orderedValue.innerHTML = toOrder;
        }
    if (toOrder > storageRemainderValue) {
        orderedValue.innerHTML = storageRemainderValue;
    }
    if (storageRemainderValue <= 10) {
        orderedValue.innerHTML = 'де товар???'
    }
}

//--------------------------------Алгоритм середньої реалізації------------------------------------------------------

function getRandomInt() {
    const randomArray = []
    for ( let i = 0; i < 12; i++ ) {
        randomArray.push(Math.floor(Math.random() * 100))
    }
console.log("рандомний масив:   " + randomArray)
    
//const arr = [5, 0, 44, 43, 45, 64, 35, 46, 87, 76, 6, 8] // карантин
//const arr = [4, 4, 66, 43, 45, 66, 35, 46, 87, 70, 700, 3] // разова продажа в карантин
//const arr = [66, 89, 66, 43, 45, 66, 35, 46, 87, 70, 700, 55] // разова продажа

//console.log("вхідний масив:   " + arr)

const cloneArr = randomArray.map(el => el)
const sortedArr = cloneArr.sort( (a,b) => a - b )
//console.log("сортований   :" + sortedArr)

for(let i = 0; i < 3; i++ ) {
    sortedArr.shift()
    sortedArr.pop()
}
//console.log("сортований масив після зрізу:   " + sortedArr)

const diapason = [sortedArr.slice(0,1), sortedArr.slice(-1)]
console.log('діапазон  : ' + diapason[0] + '-' + diapason[1])

const lastYearCurrentMonth = Math.round((randomArray[0] + randomArray[1] ) / 2);
const lastMonth = Math.round((randomArray[10] + randomArray[11]  ) / 2);
const averageValue =  Math.round((lastYearCurrentMonth + lastMonth)/2);

function testInvalidValue () {
    const tallage = 20; // відсоток
    if(averageValue <= sortedArr[0])  {
        return  (Math.round((sortedArr[0]+(sortedArr[sortedArr.length-1]))/2))
    } 
    if(averageValue >= sortedArr[sortedArr.length-1])  {
        return  sortedArr[sortedArr.length-1]
    } 
    if(averageValue >= sortedArr[0] && averageValue < sortedArr[sortedArr.length-1])  {
        return  (Math.round(averageValue+(averageValue / 100 * tallage)))
    } 
    else return "false"
}

console.log("поточний місяць минулого року:   " + lastYearCurrentMonth)
console.log("попередній місяць поточного року:   " + lastMonth)
console.log("середнє значення:   " + averageValue)
console.log(testInvalidValue())

//console.log("тест на мутабельність(звичайний масив):    " + arr)
//console.log("тест на мутабельність(рандомний масив):    " + randomArray)

}
getRandomInt()