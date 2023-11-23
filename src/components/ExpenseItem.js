import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const {currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency[0]}{props.cost}</td>
            <td>
                <button 
                    onClick={event=> increaseAllocation(props.name)}
                    style={{
                        background: 'green', 
                        color: 'white',
                        fontSize: '50px',
                        lineHeight: '40px', 
                        height: '40px', 
                        width: '40px',
                        textAlign: 'center',
                        border: 'none',
                        borderRadius: '50%', 
                        cursor: 'pointer',
                        outline: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center', 
                    }}
                >
                    +
                </button>
            </td>
            <td>
                <button 
                    onClick={event=> decreaseAllocation(props.name)}
                    style={{
                        background: 'red', 
                        color: 'white',
                        fontSize: '50px',
                        lineHeight: '40px', 
                        height: '40px', 
                        width: '40px',
                        textAlign: 'center',
                        border: 'none',
                        borderRadius: '50%', 
                        cursor: 'pointer',
                        outline: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center', 
                    }}
                >
                    -
                </button>
            </td>
            

            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
