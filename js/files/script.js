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
const rates = {}; //Объект с курсами валют
// Элементы для отбражения курса валют
const elementUSD = document.querySelectorAll('[data-value="USD"]');
const elementRUB = document.querySelectorAll('[data-value="RUB"]');
const elementVND = document.querySelectorAll('[data-value="VND"]');

//Конвертация валют
// Элементы формы, ввод суммы, выбор валюты, поле с результатом
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');
// ==================
getCurrenciesVND();
getCurrencies();
// Запуск функий async с данными загруженными позже выполнения кода
// setInterval(getCurrenciesVND, getCurrencies, 10000); //каждые 10сек = 10000 милисек
//API курсы для сайта https://www.cbr-xml-daily.ru/#howto
async function getCurrenciesVND() {
	const response = await fetch('http://www.floatrates.com/widget/00001935/147fad344eaaa310cff2b8e17d884a4a/usd.json');//http://www.floatrates.com/daily/usd.json
	const data = await response.json();
	const result = await data;
	//console.log(result);

	//rates.RUB = result.rub.rate.toFixed(1);
	rates.VND = result.vnd.rate.toFixed(1);
	// log(rates.VND);

	//=============================================
	// elementRUB.forEach((el) => {
	// 	el.textContent = result.rub.rate.toFixed(1);
	// });
	elementVND.forEach((el) => {
		el.textContent = result.vnd.rate.toFixed(1);
	});
	// elementUSD.forEach((el) => {
	// 	el.textContent = '1.0';
	// });
	//=============================================
	//elementRUB.textContent = result.rub.name;
	//elementVND.textContent = result.vnd.rate.toFixed(2);
	//=============================================
	// изменение цвета курса (упал или вырос) добавляем класс bottom(упал) или top(вырос)
	// if (rates.usd.Value > rates.usd.Previos) {
	// 	elementUSD.classList.add('top');
	// 	elementUSD.classList.remove('bottom');
	// } else {
	// 	elementUSD.classList.add('bottom');
	// 	elementUSD.classList.remove('top');
	// }
}

console.log(rates);
//API курсы для сайта https://www.cbr-xml-daily.ru/#howto
async function getCurrencies() {
	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');//http://www.floatrates.com/daily/usd.json
	const data = await response.json();
	const result = await data;
	//console.log(result);

	rates.RUB = (result.Valute.USD.Value / result.Valute.USD.Value).toFixed(1);
	rates.USD = result.Valute.USD.Value.toFixed(1);
	rates.GBP = result.Valute.GBP.Value.toFixed(1);
	console.log(rates.RUB);

	//=============================================
	elementRUB.forEach((el) => {
		el.textContent = rates.USD;
	});
	elementUSD.forEach((el) => {
		el.textContent = rates.USD;
	});
	//=============================================
	//elementRUB.textContent = result.rub.name;
	//elementVND.textContent = result.vnd.rate.toFixed(2);
	//=============================================
	// изменение цвета курса (упал или вырос) добавляем класс bottom(упал) или top(вырос)
	// if (rates.USD.Value > rates.USD.Previous) {
	// 	elementUSD.classList.add('top');
	// 	elementUSD.classList.remove('bottom');
	// } else {
	// 	elementUSD.classList.add('bottom');
	// 	elementUSD.classList.remove('top');
	// }

}
//================================
// Расчет конвертации
input.oninput = convertValue; //Слушаем изменение в поле input
select.oninput = convertValue;//Слушаем изменение в поле select

// Чтобы не было повторения кода
function convertValue() {
	result.value = (parseFloat(input.value) * rates[select.value]).toFixed(1);
}
//================================

	// 2.