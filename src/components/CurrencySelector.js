import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('£ Pound');
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => setShowOptions(!showOptions);

    const handleCurrencyChange = (selectedCurrency) => {
        setCurrency(selectedCurrency);
        setShowOptions(false);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };



    return (
        <div style={{ width: '200px', margin: '10px 0', position: 'relative' }}>
            <button
                onClick={toggleOptions}
                style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #4CAF50',
                borderRadius: '4px',
                boxShadow: '0 4px 8px 0 rgba(76, 175, 80, 0.2)',
                backgroundColor: '#66FF99',
                cursor: 'pointer',
                textAlign: 'left',
                }}
            >
            Currency ({currency})
            </button>
            {showOptions && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        width: '100%',
                        border: '2px solid #4CAF50',
                        borderTop: 'none',
                        borderRadius: '0 0 4px 4px',
                        boxShadow: '0 4px 8px 0 rgba(76, 175, 80, 0.2)',
                        backgroundColor: '#66FF99',
                        zIndex: 1000,
                    }}
                    >
                    {["$ Dollar", "£ Pound", "€ Euro", "₹ Rupee"].map((opt, index) => (
                        <div
                            key={index}
                            onClick={() => handleCurrencyChange(opt)}
                            style={{
                                padding: '10px',
                                cursor: 'pointer',
                                backgroundColor: currency === opt ? 'white' : '#66FF99',
                            }}
                        >
                        {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CurrencySelector;
