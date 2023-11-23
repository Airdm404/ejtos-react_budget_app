import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("The value cannot exceed remaining funds  £"+20000);
            return;
        }

        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }


        setNewBudget(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            dispatch({
                type: "SET_BUDGET",
                payload: newBudget,
            });
        }

    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency[0]}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange} 
                onKeyPress = {handleKeyPress}
            />
        </div>
    );
};

export default Budget;