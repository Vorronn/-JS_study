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
    savings: true,
    chooseExpenses: function(){
        for (let i=0; i<2; i++){
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }    
    },
    chooseOptExpenses: function() {
        for(let i=0; i < 3; i++){
            let a = prompt('Введите статью необязательных расходов в этом месяце',''),
                b = +prompt('Во сколько это обойдется','');
            
            if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length <50){
                appData.optionalExpenses[a] = b;
            } else {
                i--;
            }
        } 
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Бюджет на 1 день составил ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Низкий уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 300) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 300) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if(appData.savings == true){
            let save = +prompt('Какова сумма накоплений'),
                percent = +prompt('Под какой процент');
            
            appData.monthIncome = ((save*percent)/100/12).toFixed();
            alert('Сумма накоплений составила ' + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++){
            let items = prompt('Возможно есть дополнительный доход, перечислите через запятую','');
            if((typeof(items)) === 'string' && (typeof(items)) != null && items != ''){
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что то еще?', ''));
                appData.income.sort();
                console.log('Способы дополнительного заработка: ');
                this.income.forEach(function(item, i){
                    console.log((i+1) + ':' + item);
                });
            } else {
                i--;
            }

        }
        

    },

};

console.log('Наша программа включает в себя:');
for (let key in appData){
    console.log('Свойство ' + key + ' включает в себя ' + appData[key]);
}

