let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i=0; i<2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

function chooseOptExpenses(){
    for(let i=0; i < 3; i++){
        let a = prompt('Введите статью необязательных расходов в этом месяце',''),
            b = +prompt('Во сколько это обойдется','');
        
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length <50){
            appData.optionalExpenses[a] = b;
        } else {
            i--;
        }
    } 
}

chooseExpenses();

// let i = 0;
// while (i < 2) {
//     i++;
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// }

// let i = 0;
// do {
//     i++;
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// } while (i < 2);
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Бюджет на 1 день составил ' + appData.moneyPerDay);
}

if (appData.moneyPerDay < 100) {
    console.log('Низкий уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 300) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 300) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt('Какова сумма накоплений'),
            percent = +prompt('Под какой процент');
        
        appData.monthIncome = ((save*percent)/100/12).toFixed();
        alert('Сумма накоплений составила ' + appData.monthIncome);
    }
}

checkSavings();

console.log(appData);
