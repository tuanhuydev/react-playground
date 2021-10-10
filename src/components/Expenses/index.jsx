import React, { useState } from 'react';
import './styles.css';
import ExpenseItem from "../ExpenseItem";
import NewExpense from "./components/NewExpense";
import ExpenseFilter from './components/ExpenseFilter';
import PropTypes from 'prop-types';

const Expenses = (props) => {
    const { expenses = [], onAddExpense } = props;
    const [filter, setFilter] = useState('2020');
    
    const expenseItems = expenses.map((expense) => {
        const {id, ...restExpense} = expense;
        return (<ExpenseItem {...restExpense} key={id} />)
    });

    const handleFilterChange = (filter) => {
        setFilter(filter);
    }

    return (
        <div className="expenses">
            <NewExpense onAddExpense={onAddExpense} />
            <ExpenseFilter selectedFilter={filter} onChange={handleFilterChange} />
           {expenseItems}
        </div>
    );
}

export default Expenses;

Expenses.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.isRequired,
        title: PropTypes.string,
        amount: PropTypes.number.isRequired,
        date: PropTypes.instanceOf(Date),
    })).isRequired,
    onAddExpense: PropTypes.func.isRequired,
};