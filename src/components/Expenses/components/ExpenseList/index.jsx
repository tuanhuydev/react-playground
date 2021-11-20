import React from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from '../../../ExpenseItem';
import './styles.css';

const ExpenseList = (props) => {
    const { expenses = 0 } = props;
    if (expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Expenses not found</h2>
    }
    return (
        <ul className="expenses-list"> 
            {expenses.map(({ id, ...restExpense }) => (<ExpenseItem {...restExpense} key={id} />))}
        </ul>
    )
}

export default ExpenseList;

ExpenseList.propTypes = {
    expenses: PropTypes.array
}
