////type object arrays
var car={
    color:'blue',
    doorno:4
}
console.log(car.doorno);
car.doorno=3;
var strArr:string[]=[];
strArr.push('aa');

var mixedArr:(string|number|boolean)[]=[];
mixedArr.push(1);
mixedArr.push('aa');
mixedArr.push(true);
console.log(mixedArr);