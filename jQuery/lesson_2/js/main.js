/* Взаимодействия с элементами */

$(function() {
	// Любой код
});
$('h2, p') // Первый, второй, третий и т.д.
$('h2 span') // outer и inner 
$('h2 > span') // parent > child 
$('h2 + p'); //.css('border', '1px solid #000'); // prev + next Только тот элемент который идет сразу после верхнего тега
$('h2 ~ p').css('border', '2px solid #000'); // prev ~ next 	