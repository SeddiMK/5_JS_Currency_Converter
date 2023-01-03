// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
//=============================================
// Найти кнопки и отпуты
// Взять данные из апи
// Вставить данные в отпуты соответствующим данным
// Привязать кнопку к реверсу данных...
//=============================================
//1. Получаем фай .json с кодировками валюты
// fetch('http://www.floatrates.com/daily/usd.json').then(function (result) {
// 	return result.json()
// }).then(function (data) {
// 	console.log(data);
// })

async function getCurrencies() {
	const response = await fetch('http://www.floatrates.com/daily/usd.json');

}

// 2. 