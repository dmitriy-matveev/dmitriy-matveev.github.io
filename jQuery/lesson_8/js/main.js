/* ====== События клавиатуры ===== */

// $('input').keydown(function(event) {
// 	console.log($(this).val())
// }); // Клавиша в нажатом состоянии

// $('input').keyup(function(event) {
// 	$('p').text($(this).val())
// }); // Клавиша больше не в нажатом состоянии
// $('input').keypress(function(eventObject) {
// 	console.log(eventObject.which)
// }); // Ввод символа с клавиатуры 




// $('input').keydown(function() {
// 	console.log('Зажата клавиша');
// });

// $('input').keydown(function() {
// 	console.log($(this).val());
// });

// $('input').keyup(function() {
// 	console.log($(this).val());
// });

// $('input').keyup(function() {
// 	$('p').text($(this).val())
// });

// $('input').keypress(function(eventObject) {
// 	console.log(eventObject.which);
// });

$('input').keyup(function(event) {
	console.log($(this).val().length);
});