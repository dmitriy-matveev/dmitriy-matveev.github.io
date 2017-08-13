/* ====== Переменные и их свойства ===== */

// var num = 5423; // Числа
// var str = 'Можно писать что угодно'; // Строки
// var bool = false; // Булевые значения
// var myVar = null; // Ничего :)
// var undefind = undefind; // Значение не присвоено 
// var man = {
// 	name: 'Артем', 
// 	age: 25,
// 	message: 'привет'
// }




//Мое
// var age = 25;
// var message = 'Привет!';
// var user = admin;

// var number = 5423;
// var str = 'Mama myla ramy';
// var bool = true; // true или false \ 0 или 1
// var myVar = null;
// var undefind = undefind;
// var man = {
// 	name: 'Дима', 
// 	age: 25,
// 	message: 'Привет'
// };

// console.log(typeof man);
// console.log(typeof number);
// console.log(typeof bool);
// console.log(typeof str);
// console.log(typeof myVar);
// console.log(typeof undefind);



var form = {
	name: null,
	sirname: null,
};
var name;
var sirname;


var send = $('#send-btn');
send.on('click', function() {
	form.name = $('input#name').val();
	form.sirname = $('input#sirname').val();
	name = form.name;
	sirname = form.sirname;
	console.log(name + ' ' + sirname);
});

