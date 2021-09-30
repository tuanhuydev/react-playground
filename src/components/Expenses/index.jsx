import React from 'react';
import './styles.css';
import ExpenseItem from "../ExpenseItem";
import PropTypes from 'prop-types';

const Expenses = (props) => {
    const { expenses = [] } = props;
    
    const expenseItems = expenses.map((expense) => {
        const {id, ...restExpense} = expense;
        return (<ExpenseItem {...restExpense} key={id} />)
    });

    return (
        <div className="expenses">
           {expenseItems}
        </div>
    );
}

export default Expenses;

Expenses.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        amount: PropTypes.number,
        date: PropTypes.instanceOf(Date),
    })).isRequired,
};