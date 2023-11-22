import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("The value cannot exceed remaining funds  £"+20000);
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
        <span>Budget: £</span>
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