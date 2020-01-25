/*let num = 20; //глобальная переменная
function showFirstMessage(text) {
	alert(text);
	let num = 10; //это переменная только в функции	
	console.log(num);
}

showFirstMessage("Hello world"); // вызвали функцию
console.log(num);*/

/*let calc = function (a,b) {  //такая функция создается тогда, когда до нее доходит код
	return (a + b);
}

function calc (a,b) { //такая функция работает всегда и на все
	return (a + b);
} */

//let calc = (a,b) => a + b //новый формат функции


console.log(calc(3,4));

function retVar () {
	let num = 50;
	return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length); //свойство
// выведется 4, так как в слове тест 4 знака
console.log(str.toUpperCase());//метод
console.log(str.toLowerCase());//метод

let twelve = "12.2";
console.log(Math.round(twelve)); //округление до ближайшего целого числа
console.log(parseInt(twelve)); //округление до целого
//есть очень много
