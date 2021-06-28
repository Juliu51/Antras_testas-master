let HTML = "";
let lentele = document.querySelector('.table-content');
let income = document.querySelector('.income');
let expense = document.querySelector('.expense');
let balance = document.querySelector('.balance');
let NewAccount = [];
let income_total = 0;
let expense_total = 0;
let minExpensesCount = Infinity;
let minIncomeCount = Infinity;
let maxIncomeCount = 0;
let maxExpensesCount = 0;

function getData(account, men) {
    if (Array.isArray(account)) {
        for (let i = 0; i < account.length; i++) {
            for (let x = 0; x < account.length; x++) {
                if (account[x].month === i + 1) {
                    NewAccount.push(account[x]);        //<-- Supushint viska eiles tvarka
                }
            }
        }

        for (let i = 0; i < NewAccount.length; i++) {
            if (NewAccount[i].income == undefined) {
                NewAccount[i].income = 0
            }
                    if (NewAccount[i].income > maxIncomeCount && NewAccount[i].income !== 0)  {
                        maxIncomeCount = NewAccount[i].income;            //<-- Be infinity neranda max/min dar galima naudoti Math.max/min 
                        maxIncome.innerHTML = men[i];
                           }
                     if (NewAccount[i].income < minIncomeCount && NewAccount[i].income !== 0)  {
                        minIncomeCount = NewAccount[i].income;
                         minIncome.innerHTML = men[i];
                         }
            if (NewAccount[i].expense == undefined) {
                NewAccount[i].expense = 0
                 }
                     if (NewAccount[i].expense > maxExpensesCount && NewAccount[i].expense !== 0)  {
                        maxExpensesCount = NewAccount[i].expense;
                        maxExpenses.innerHTML = men[i];
                       }
                    if (NewAccount[i].expense < minExpensesCount && NewAccount[i].expense !== 0) {
                        minExpensesCount = NewAccount[i].expense;
                        minExpenses.innerHTML = men[i];
                        }
            income_total += NewAccount[i].income;
            expense_total += NewAccount[i].expense;

            HTML += `<div class="table-row">                                
    <div class="cell">${NewAccount[i].month}</div>
    <div class="cell">${men[i]}</div>
    <div class="cell">${NewAccount[i].income} Eur</div>
    <div class="cell">${NewAccount[i].expense} Eur</div>
    <div class="cell">${NewAccount[i].income - NewAccount[i].expense} Eur</div>
</div>`;
        }
        lentele.innerHTML = HTML;
        income.innerHTML = income_total + ' EUR';
        expense.innerHTML = expense_total + ' EUR';
        balance.innerHTML = income_total - expense_total + ' EUR';
    }
}

        getData(account, men);