import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ExpenseDate = (props) => {
    const { date } = props;

    const expenseMonth = date.toLocaleDateString('en-US', { month: 'long' });
    const expenseYear = date.getFullYear();
    const expenseDate = date.toLocaleDateString('en-US', { day: '2-digit' });
    
    return <div className="expense-date">
        <div className="expense-date__month">{expenseMonth}</div>
        <div className="expense-date__year">{expenseYear}</div>
        <div className="expense-date__day">{expenseDate}</div>
    </div>
}

export default ExpenseDate;

ExpenseDate.propTypes = {
    date: PropTypes.instanceOf(Date),
}