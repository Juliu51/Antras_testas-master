let HTML = "";
let lentele = document.querySelector('.table-content');
let income = document.querySelector('.income');
let expense = document.querySelector('.expense');
let balance = document.querySelector('.balance');
let NewAccount = [];

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
            if (NewAccount[i].expense == undefined) {
                NewAccount[i].expense = 0
                 }

            HTML += `<div class="table-row">                                
    <div class="cell">${NewAccount[i].month}</div>
    <div class="cell">${men[i]}</div>
    <div class="cell">${NewAccount[i].income} Eur</div>
    <div class="cell">${NewAccount[i].expense} Eur</div>
    <div class="cell">${NewAccount[i].income - NewAccount[i].expense} Eur</div>
</div>`;
        }
        lentele.innerHTML = HTML; 
    }
}

        getData(account, men);