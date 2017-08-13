/* ====== События браузера и страницы ===== */

// $(function() {
// 	$('p').text('DOM элементы загружены') 	
// }); // Готовность DOM элементов 

// $(window).load(function() {
	
// }); // Полная загрузка страницы

// $(window).unload(function(){
// 	alert('Пользователь, пока!');
// }) // Выход со страницы 

// $(window).resize(function(event) {
// 	console.log('размеры окна изменены!')
// });	// Изменение размера (например, окна)

// $(window).scroll(function(event) {
// 	console.log('Страница прокручена')
// }); // Прокрутка элемента





// $(function() {
// 	$('p').text('DOM элементы загружены')
// });

// $(window).load(function() {
// });

// $(window).unload(function()) {
// 	alert('Пользователь пока!');
// })

// $(window).resize(function(event) {
// 	console.log('Рамеры окна изменены');
// });

// $(window).scroll(function(event) {
// 	console.log('Страница прокручена');
// });

$(function() {
	$('img').delay(2000).queue(function(){
		$(this).attr('alt', 'Картинка загружена!')	
	});
});

