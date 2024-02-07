import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const {budget, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value);
        const totalExpenses = expenses.reduce((total, item) => (total + item.cost), 0);

        if (newBudgetValue < totalExpenses){
            alert('The new budget cannot be lower than the total amount spent so far.');
            return;
        }

        if (newBudgetValue > 20000){
            alert('The new budget exceed 20000.');
            return;
        }

        setNewBudget(event.target.value);
    }

    return (
<div className='alert alert-secondary'>
    {/* <span>Budget: £{budget}</span> */}
    <span>Budget: {currency} </span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};


export default Budget;