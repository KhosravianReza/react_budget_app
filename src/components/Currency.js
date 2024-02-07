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

    const label = `Currency (${currency})`;

    return (
        <div className="dropdown">
            <label htmlFor="currencyDropdown">{label}</label>
            <select
                id="currencyDropdown"
                className="form-control currency-dropdown"
                value={currency}
                onChange={handleCurrencyChange}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};


export default Currency;