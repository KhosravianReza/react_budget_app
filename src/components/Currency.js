import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import './Components.css';


const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        // <div className="form-group">
        <div className="dropdown">
            <select
                id="currencyDropdown"
                className="form-control currency-dropdown"
                value={currency}
                onChange={handleCurrencyChange}
            >
                <option value="$">Currency ($ Dollar)</option>
                <option value="£">Currency (£ Pound)</option>
                <option value="€">Currency (€ Euro)</option>
                <option value="₹">Currency (₹ Rupee)</option>
            </select>
        </div>
    );
};


export default Currency;