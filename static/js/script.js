// alert ("Hello");
// console.log('Hello');

function ageInDays() {
    var birthYear = prompt('What year where you born?');
    var ageInDayss = (2018 - birthYear) * 365;
    console.log(ageInDayss)
    var h1 = document.createElement('h1');
    var testAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(testAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}