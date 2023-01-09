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
//getCurrenciesVND();
getCurrencies();
// Запуск функий async с данными загруженными позже выполнения кода
// setInterval(getCurrenciesVND, getCurrencies, 10000); //каждые 10сек = 10000 милисек


//API курсы для сайта https://www.cbr-xml-daily.ru/#howto
// async function getCurrenciesVND() {
// 	const response = await fetch('http://www.floatrates.com/daily/usd.json');//http://www.floatrates.com/daily/usd.json
// 	const data = await response.json();
// 	const result = await data;
// 	//console.log(result);

// 	//rates.RUB = result.rub.rate.toFixed(1);
// 	rates.VND = result.vnd.rate.toFixed(1);
// 	// log(rates.VND);

// 	//=============================================

// 	elementVND.forEach((el) => {
// 		el.textContent = result.vnd.rate.toFixed(1);
// 	});

// 	//=============================================
// 	//elementRUB.textContent = result.rub.name;
// 	//elementVND.textContent = result.vnd.rate.toFixed(2);
// 	//=============================================
// 	// изменение цвета курса (упал или вырос) добавляем класс bottom(упал) или top(вырос)
// 	// if (rates.usd.Value > rates.usd.Previos) {
// 	// 	elementVND.classList.add('top');
// 	// 	elementVND.classList.remove('bottom');
// 	// } else {
// 	// 	elementVND.classList.add('bottom');
// 	// 	elementVND.classList.remove('top');
// 	// }
// }
// const input_currency = document.querySelector('#input_currency');
// const output_currency = document.querySelector('#output_currency');
// const input_amount = document.querySelector('#input_amount');
// const output_amount = document.querySelector('#output_amount');
// const exchange = document.querySelector('#exchange');
// const rate = document.querySelector('#rate');

// input_currency.addEventListener('change', compute);
// output_currency.addEventListener('change', compute);
// input_amount.addEventListener('input', compute);
// output_amount.addEventListener('input', compute);

// exchange.addEventListener('click', () => {
// 	const temp = input_currency.value;
// 	input_currency.value = output_currency.value;
// 	output_currency.value = temp;
// 	compute();
// });

// function compute() {
// 	const input_currency1 = input_currency.value;
// 	const output_currency1 = output_currency.value;

// 	fetch(`https://api.exchangerate-api.com/v4/latest/${input_currency1}`)
// 		.then(res => res.json())
// 		.then(res => {
// 			const new_rate = res.rates[output_currency1];
// 			rate.innerText = `1 ${input_currency1} = ${new_rate} ${output_currency1}`
// 			output_amount.value = (input_amount.value * new_rate).toFixed(2);
// 		})
// }

//compute();
//console.log(exchange_rates);
//API курсы для сайта https://www.cbr-xml-daily.ru/#howto
async function getCurrencies() {
	const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');//http://www.floatrates.com/daily/usd.json//https://www.cbr-xml-daily.ru/daily_json.js
	const data = await response.json();
	const result = await data;
	console.log(result);

	rates.RUB = result.rates.RUB.toFixed(1);
	rates.VND = result.rates.VND.toFixed(1);
	rates.USD = (result.rates.USD / result.rates.USD).toFixed(1);
	rates.GBP = result.rates.GBP;

	rates.USD = result.rates.USD;

	console.log(result.rates.RUB);

	//=============================================
	elementRUB.forEach((el) => {
		el.textContent = rates.RUB;
	});
	elementVND.forEach((el) => {
		el.textContent = rates.VND;
	});
	elementUSD.forEach((el) => {
		el.textContent = rates.USD;
	});
	//=============================================
	//elementRUB.textContent = result.rub.name;
	//elementVND.textContent = result.vnd.rate.toFixed(2);
	//=============================================

	// изменение цвета курса (упал или вырос) добавляем класс bottom(упал) или top(вырос)

	// if (result.Valute.USD.Value > result.Valute.USD.Previous) {
	// 	elementUSD.classList.add('bottom');
	// 	elementUSD.classList.remove('top');

	// }
	// else {
	// 	elementUSD.classList.add('top');
	// 	elementUSD.classList.remove('bottom');
	// }

	// }

}
// async function getCurrencies() {
// 	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');//http://www.floatrates.com/daily/usd.json
// 	const data = await response.json();
// 	const result = await data;
// 	console.log(result);

// 	rates.RUB = result.Valute.USD.Value.toFixed(1);
// 	rates.USD = (result.Valute.USD.Value / result.Valute.USD.Value).toFixed(1);
// 	rates.GBP = result.Valute.GBP;

// 	rates.USD = result.Valute.USD;

// 	console.log(result.Valute.USD.Value);

// 	//=============================================
// 	elementRUB.forEach((el) => {
// 		el.textContent = rates.RUB;
// 	});
// 	elementUSD.forEach((el) => {
// 		el.textContent = rates.USD;
// 	});
// 	//=============================================
// 	//elementRUB.textContent = result.rub.name;
// 	//elementVND.textContent = result.vnd.rate.toFixed(2);
// 	//=============================================

// 	// изменение цвета курса (упал или вырос) добавляем класс bottom(упал) или top(вырос)

// 	// if (result.Valute.USD.Value > result.Valute.USD.Previous) {
// 	// 	elementUSD.classList.add('bottom');
// 	// 	elementUSD.classList.remove('top');

// 	// }
// 	// else {
// 	// 	elementUSD.classList.add('top');
// 	// 	elementUSD.classList.remove('bottom');
// 	// }

// }
//================================

//================================
// Расчет конвертации
input.oninput = convertValue; //Слушаем изменение в поле input
select.oninput = convertValue;//Слушаем изменение в поле select

// Чтобы не было повторения кода
function convertValue() {
	result.value = (parseFloat(input.value) * rates[select.value]).toFixed(1);
}