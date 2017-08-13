/* Взаимодействия с элементами по атрибутам */

// $('a[href]').css('border', '1px solid #000');	// Простой атрибут
// $('a[download]').css('border', '2px solid red');	// Простой атрибут
// $('a[href="#"]').css('border', '1px solid red');	// Полное соответсвие
// $('a[href="http://ya.ru"]').css('border', '1px solid red'); // Полное соответсвие
// $('a[href!="http://ya.ru"]').css('border', '1px solid red'); // Полное несоответсвие
// $('a[href^="http://"]').css('border', '1px solid red'); // Начинается с ...
// $('a[href$=".ru"]').css('border', '1px solid red'); // Заканчивается на ... 
// $('a[href*="go"]').css('border', '1px solid red'); // Содержит ... 
// $('a[data-target|="main"]').css('border', '1px solid red'); // // Имеет префикс - ...
// $('a[href][download]').css('border', '1px solid red'); // Имеет одновременно несколько атрибутов 


$('[href]').css('border-top', '2px solid #000');
$('[href="http://ya.ru"]').css('border-right', '2px solid red');
$('[src]').css('border-bottom', '2px solid black');
$('[src^="img/"]').css('border', '2px solid red');
$('[src$=".js"]').css('border', '2px solid red');
$('[src][title]');
