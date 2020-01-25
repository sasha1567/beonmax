'use strict';
let money, time;

function start() {
 	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');

	}

}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {

	for(let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
		&& a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {
		console.log("Not correct");
		i = i - 1;
	}
	
	} 
}
chooseExpenses();


function detectDayBudget () {
	appData.moneyPerDay = (appData.budget / 30).toFixed(); 
	alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel () {

	if(appData.moneyPerDay < 100) {
	console.log("Minimum");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Average");
	} else if (appData.moneyPerDay > 2000) {
	console.log("High");
	} else {
	console.log("There is an error");
	}
}
detectLevel();

function checkSavings() {
	if(appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);

	}
}

checkSavings();

function chooseOptExpenses() {

	for(let i = 1; i <= 3; i++) {
	let questionOptExpenses = prompt("Статья необязательных расходов", '');

	appData.optionalExpenses[i] = questionOptExpenses;
	console.log(appData.optionalExpenses);	
	
}
}

chooseOptExpenses();

//Условия

/*let num = 50;

if(num < 49) {
	console.log("Not nice")
} else if (num > 100) {
	console.log("Much")
} else {
	console.log("Nice")
};

(num == 50) ? console.log("Nice") : console.log("Not nice");

switch (num) {
	case num < 49:
		console.log("Not nice");
		break;
	case num > 100:
		console.log("Much");
		break;
	case num > 80:
		console.log("Much still");
		break;	
	case 50:
		console.log("Nice");
		break;	
	default: 
		console.log("Smth went wrong");
		break;
} */

//Циклы

/*let num = 50;
while (num < 55) {
	console.log(num);
	num++;
} */

/*let num = 50;
do {
	console.log(num);
	num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
	if (i == 6) {
		continue; // продолжит без 6
	}
	console.log(i);
} */