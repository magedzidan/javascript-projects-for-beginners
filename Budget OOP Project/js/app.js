class UI{
    constructor(){
        this.budgetForm=document.querySelector('budget-form');
        this.budgetInput=document.querySelector('input-style-budget');
        this.budgetAmount=document.querySelector('budget-amount');
        this.expensesForm=document.querySelector('expenses-form');
        this.expensesInputTitle=document.querySelector('input-style-expenses-title');
        this.expensesInputValue=document.querySelector('input-style-expenses-value');
        this.expensesAmount=document.querySelector('expenses-amount');
        this.expensesList=document.querySelector('expense-list');
        this.Balance=document.querySelector('budget');
        this.errorMsg=document.querySelector('error-message');
        this.itemList=[];
        this.itemId=0;
    }

     submit_budget() {
            const value= this.budgetInput.value;
            if(value===''||value===isNaN||value<0){
                this.errorMsg.classList.add('show_item');
                const self = this;
                setTimeout(function(){
                   self.errorMsg.classList.remove('show_item');
                },3000);
            }
            else{
                this.budgetAmount.textContent=value;
                this.budgetInput.value='';
                checkTheBalance();
            }
    }


    submitExpenses() {
        const expenseTitle=this.expensesInputTitle.value;
        const expenseValue=parseInt(this.expensesInputValue.value);
        if(expenseTitle==='' || expenseValue==='' || expenseValue<0){
            this.errorMsg.classList.add('show_item').textContent('expense value or title are wrong idk');
            const self=this;
            setTimeout(function(){
                self.errorMsg.classList.remove('show_item')
            },3000);
        }

        else{
          const expenseAmount=  this.expensesAmount.value;
          expenseAmount+=expenseValue;
          let expense={
            id:this.itemId,
            title:expenseTitle,
            value:expenseValue
          }
          this.itemList.push(expense);
          this.itemId++;
          addExpenses(expense);
          checkTheBalance();

        }
    }

    checkTheBalance(){
        const budgetAmount=this.budgetAmount.value;
        const expensesAmount=this.expensesAmount.value;
        const totalBudget=parseInt(budgetAmount)-parseInt(expensesAmount);
        this.Balance.textContent=totalBudget;

        if(totalBudget>0){
            this.Balance.classList.remove('add_black','add_red');
            this.Balance.classList.add('add_green');
        }
        else if(totalBudget<0){
            this.Balance.classList.remove('add_black','add_green');
            this.Balance.classList.add('add_red');
        }
        else{
            this.Balance.classList.remove('add_red','add_green');
            this.Balance.classList.add('add_black');
        }
    }

    addExpenses(expense){
        const div=document.createElement('div');
        div.classList.add(expense);
        div.style.display='flex';
        div.style.justifyContent='space-between';
        div.style.alignItems='baseline';

        const title=document.createElement('h5');
        title.classList.add('list-item','item-title');
        title.innerText=expense.title;
        div.appendChild(title);
        
        const value=document.createElement('h5');
        value.classList.add('list-item','item-value');
        value.innerText=expense.value;
        div.appendChild(value);

        const deleteIcon=document.createElement('a');
        deleteIcon.classList.add('list-item','delete-icon');
        deleteIcon.dataset.dataID=expense.id;
        deleteIcon.innerHTML='<i class="fas fa-trash"></i>';
        div.appendChild(deleteIcon);
        this.expensesList.appendChild(div);

    }


}


function eventListeners(){
const budgetForm=document.querySelector('budget-form');
const expensesForm=document.querySelector('expenses-form');
const expenseList=document.querySelector('expense-list');

const UI=new UI();
budgetForm.addEventListener('submit',function(event){
    event.preventDefault();
    UI.submit_budget();
})

expensesForm.addEventListener('submit',function(event){
    event.preventDefault();
    UI.submitExpenses();
})

expenseList.addEventListener('click',function(event){
    event.preventDefault();
})
}


document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
  })



