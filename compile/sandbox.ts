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

var mixed:number|string;
mixed='jj';
//mixed=true;
console.log(mixed);



var obj1:object;
obj1={name:"sabbir",age:25}
console.log(obj1);

var obj2:{
    name:string,
    age:number
}
obj2={
    name:'sabbir',
    age:22
}
console.log(obj2);