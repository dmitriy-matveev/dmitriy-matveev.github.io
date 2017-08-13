/* ====== Фильтры ===== */

/* Простые фильтры в jQuery */		

// $('p:first').css('border', '1px solid red'); // Первый элемент
// $('p:last').css('border', '1px solid red'); // Последний элемент
// $('a:eq(0)').css('border', '1px solid red'); // Элемент под номером ... (начинается с 0)
// $('*:not(p,h2,h1)').css('border', '1px solid red'); // Выделить все элементы, кроме ...
// $('li:odd').css('border', '1px solid red'); // Четные элементы
// $('li:even').css('border', '1px solid red'); // Нечетные элементы
// $('li:gt(2)').css('border', '1px solid red'); // Элементы чей порядковый номер больше N
// $('li:lt(2)').css('border', '1px solid red'); // Элементы чей порядковый меньше больше N
// $('*:').css('border', '1px solid red'); // Только те элементы, которые являються заголовками
// $('li:animated').css('border', '1px solid red'); // Только те элементы, которые задействованы в анимации
// $('li:hidden').css('border', '1px solid red'); // Скрытые элементы
// $('li:visible').css('border', '1px solid red'); // Видимые элементы
// $('li:lang(ru)').css('border', '1px solid red'); // Фильтрация по языку

$('ul > li:first').css('border-bottom', '1px solid red');
$('ul > li:last').css('border-bottom', '1px solid red');
$('ul > li:odd').css('border-right', '1px solid black');
$('ul > li:gt(2)').css('background-color', 'red');
