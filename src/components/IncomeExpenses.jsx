import React from 'react';
import { useGlobalState } from '../context/GlobalState';

function IncomeExpenses() {
    
    const { transactions } = useGlobalState();

    const amounts = transactions.map( transaction => transaction.amount);

    const income = amounts.filter(item => item > 0 ).reduce((acc, item) => ( acc += item ), 0).toFixed(2);
    
    const expense = amounts.filter(item => item < 0 ).reduce((acc, item) => ( acc -= item ), 0).toFixed(2);
    return(
        <>
            <div className='flex justify-between my-2'>
                <h4>Ingresos</h4>
                <h5>{income}</h5>
            </div>
            <div className='flex justify-between my-2'>
                <h4>Gastos</h4>
                <h5>{expense}</h5>
            </div>
        </>
    )
}

export default IncomeExpenses;