var character = 'mario';

console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});

var circle = (diameter:number) => {
    return diameter * Math.PI;
}
console.log(circle(3));