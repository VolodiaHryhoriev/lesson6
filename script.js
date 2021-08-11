// TASK1
let i = 0;
const array = ['red', 'yellow', 'green']
document.getElementById('box').addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = array[i];
});


document.getElementById('box').addEventListener('mouseout', function (event) {
    event.target.style.backgroundColor = 'purple';
    i++;
    if (i >= arr.length) i = 0;
});

// TASK2
document.getElementById('box1').addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'yellow'
    event.target.style.color = 'black'
    document.getElementById('box1').innerHTML = 'хочеш знати який?'
})

document.getElementById('box1').addEventListener('mouseout', function (event) {
    event.target.style.backgroundColor = 'purple'
    event.target.style.color = 'black'
    document.getElementById('box1').innerHTML = 'у мене є секрет'
})

document.getElementById('box1').addEventListener('mousedown', function (event) {
    event.target.style.backgroundColor = 'black'
    event.target.style.color = 'white'
    document.getElementById('box1').innerHTML = 'а я тобі не скажу'
})
document.getElementById('box1').addEventListener('mouseup', function(event){
    event.target.style.backgroundColor = 'yellow'
    event.target.style.color = 'black'
    document.getElementById('box1').innerHTML = 'хочеш знати який?'
})

// TASK3
document.querySelector('.box1').addEventListener('click', function() {
    let askLink = prompt('write link')
    document.querySelector('.box1').innerHTML=`<img src='${askLink}' style = "width: 200px; height: 200px;">`
})

document.querySelector('.box2').addEventListener('click', function() {
    let askLink1 = prompt('write link')
    document.querySelector('.box2').innerHTML=`<img src='${askLink1}' style = "width: 200px; height: 200px;">`
})

document.querySelector('.box3').addEventListener('click', function() {
    let askLink2 = prompt('write link')
    document.querySelector('.box3').innerHTML=`<img src='${askLink2}' style = "width: 200px; height: 200px;">`
})

// TASK4
function changeTextColor() {
    for (let element of document.getElementsByTagName('li')) {
        element.addEventListener('click', function() {
            element.style.color = element.innerHTML
        })
    }
}
