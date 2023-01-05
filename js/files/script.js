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
const rates = {};
const elementUSD = document.querySelectorAll('[data-value="USD"]');
const elementRUB = document.querySelectorAll('[data-value="RUB"]');
const elementVND = document.querySelectorAll('[data-value="VND"]');

//API курсы для сайта https://www.cbr-xml-daily.ru/#howto
async function getCurrencies() {
	const response = await fetch('http://www.floatrates.com/widget/00001935/147fad344eaaa310cff2b8e17d884a4a/usd.json');//http://www.floatrates.com/daily/usd.json
	const data = await response.json();
	const result = await data;
	console.log(result);

	rates.RUB = result.rub.rate.toFixed(1);
	rates.VND = result.vnd.rate.toFixed(1);
	//console.log(rates);

	//=============================================
	elementRUB.forEach((el) => {
		el.textContent = result.rub.rate.toFixed(1);
	});
	elementVND.forEach((el) => {
		el.textContent = result.vnd.rate.toFixed(1);
	});
	elementUSD.forEach((el) => {
		el.textContent = '1.0';
	});
	//=============================================
	//elementRUB.textContent = result.rub.name;
	//elementVND.textContent = result.vnd.rate.toFixed(2);
	//=============================================
	// изменение цвета курса (упал или вырос) добавляем класс bottom(упал) или top(вырос)


}
getCurrencies();


	// 2.