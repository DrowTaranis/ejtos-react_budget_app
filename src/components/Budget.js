import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency'

const Budget = (props) => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("The value cannot exceed 20,000.");
            setNewBudget(20000);
            return;
        }
        setNewBudget(event.target.value);
    }

const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (event.target.value < totalExpenses) {
            alert("The budget must not be lower than the allocated spend.");
            setNewBudget(totalExpenses);
            return;
        }
      }
}



    return (
<div className='alert alert-secondary'>
<span>Budget: &nbsp;&nbsp;</span>
<input type="number" step="10" value={newBudget} onKeyDown={handleKeyPress} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
