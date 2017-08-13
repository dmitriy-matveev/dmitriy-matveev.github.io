/* ====== Базовые события ===== */

// $('ul li').click(function(event) {
// 	console.log('Ты нажал на элемент');
// 	$('ul').append('<li>Дополнительный элемент</li>');
// });	// click()

// function addAndStop(e) {
// 	$('ul').append('<li>Дополнительный элемент</li>');
// 	$('ul').off('click');
// }

// $('ul').on('click', 'li', addAndStop);



// $('ul li').click(function(event) {
// 	console.log('Ты нажал на эелемент');
// 	$('ul').append('<li>Дополнительный эдемент</li>')
// });




// $('ul').on('click', 'li', function(){
// 	console.log('Ты кликнул на элемент');
// 	$('ul').append('<li>Дополнительный элемент</li>')
// });


// function addAndStop(e) {
// 	$('ul').append('<li>Дополнительный элемент</li>');
// 	$('ul').off('click');
// }

// $('ul').on('click', 'li', addAndStop);



$(function() {
	$('.homework').on('click', 'button.create-btn', addAndStop);
	function addAndStop(e) {
		$('.homework').append('<div class="delete-item"><img id="delete-img" src="#" alt="Какая-то картинка"/><button id="close-btn" class="btn close-btn">Убрать картинку</button></div>');
		$('.homework').off('click');
	};

	$(document).on('click', '#close-btn', function(e){
		$('.delete-item').remove();
		$('.homework').off('click');
	});
});
	



