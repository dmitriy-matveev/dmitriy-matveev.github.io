/* Пишем свой калькулятор на сайт */

$(function() {
	var color = $('.color');
	var wheels = $('.wheels');
	var model = $('.model');
	var baseCo = 50000;
	var baseWh = 10000;
	var baseMo = 100000;
	var finalPr = 160000;

	color.change(function() {
		finalPr = (+color.val() * baseCo) + (+wheels.val() * baseWh) + (+model.val() * baseMo)
		$('#price').text(finalPr);
		if ($(this).val() == 1) {
			$('.calc-col').css('background-color', 'yellow');
		} else {
			if ($(this).val() == 2) {
				$('.calc-col').css('background-color', 'white');
			} else {
				$('.calc-col').css('background-color', 'black');
			}
		}
	});
	wheels.change(function() {
		finalPr = (+color.val() * baseCo) + (+wheels.val() * baseWh) + (+model.val() * baseMo)
		$('#price').text(finalPr);
		if ($(this).val() == 1) {
			$('.img-wheels').attr('src', 'img/wheel-1.jpg');
		} else {
			if ($(this).val() == 2) {
				$('.img-wheels').attr('src', 'img/wheel-2.png');
			} else {
				$('.img-wheels').attr('src', 'img/wheel-3.jpg');
			}
		}
	});
	model.change(function() {
		finalPr = (+color.val() * baseCo) + (+wheels.val() * baseWh) + (+model.val() * baseMo)
		$('#price').text(finalPr);
		if ($(this).val() == 1) {
			$('.img-model').attr('src', 'img/1.jpg');
		} else {
			if ($(this).val() == 2) {
				$('.img-model').attr('src', 'img/2.jpg');
			} else {
				$('.img-model').attr('src', 'img/3.jpg');
			}
		}
	});

	$('#price').text(finalPr);
});

