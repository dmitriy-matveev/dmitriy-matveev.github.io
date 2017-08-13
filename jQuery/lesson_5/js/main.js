/* ====== Фильтры ===== */

/* Фильтры по содержимому в jQuery */		

// $('p:contains(Далеко)').css('border', '1px solid red');	// Содержит текст
// $('p:empty').text('Лбой текст'); // Пустой
// $('h2:has(span)').css('border', '1px solid red');	// Имеет внутри селектор;
// $('span:parent').css('border', '1px solid red'); // Обращение к родителю

$('*:contains(Пользователь)').css('border', '1px solid red');
$('*:empty').text('Пусто')