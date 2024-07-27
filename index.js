document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const amount = document.getElementById('amount').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;

        addExpense(amount, description, category);

        form.reset();
    });

    function addExpense(amount, description, category) {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <span>${amount} - ${description} (${category})</span>
            <button class="btn btn-danger btn-sm ml-2" onclick="deleteExpense(this)">Delete</button>
            <button class="btn btn-warning btn-sm ml-2" onclick="editExpense(this)">Edit</button>
        `;
        expenseList.appendChild(expenseItem);
    }

    window.deleteExpense = function(button) {
        const expenseItem = button.parentElement;
        expenseList.removeChild(expenseItem);
    };

    window.editExpense = function(button) {
        const expenseItem = button.parentElement;
        const [amountDesc, category] = expenseItem.firstChild.textContent.split(' - ');
        const [description, categoryValue] = amountDesc.split(' (');
        document.getElementById('amount').value = amountDesc;
        document.getElementById('description').value = description;
        document.getElementById('category').value = categoryValue.replace(')', '');

        expenseList.removeChild(expenseItem);
    };
});
