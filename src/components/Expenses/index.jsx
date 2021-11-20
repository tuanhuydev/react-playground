import React, { useState } from 'react';
import NewExpense from "./components/NewExpense";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from './components/ExpenseFilter';
import ExpensesChart from './components/ExpensesChart';
import PropTypes from 'prop-types';
import './styles.css';

const Expenses = (props) => {
    const { expenses = [], onAddExpense } = props;
    const [filter, setFilter] = useState({ year: '2020' });

    const handleChangeFilter = (newFilter) => {
        setFilter(newFilter);
    }

    const filteredExpenses = expenses.filter((expense) => {
        const expenseYear = expense.date.getFullYear().toString();
        return expenseYear === filter.year
    });

    return (
        <div className="expenses">
            <NewExpense onAddExpense={onAddExpense} />
            <ExpenseFilter selectedFilter={filter} onChange={handleChangeFilter} />
            <ExpensesChart expenses={filteredExpenses} />
           <ExpenseList expenses={filteredExpenses} />
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