import React from 'react';
import './styles.css';
import ExpenseDate from '../ExpenseDate';
import PropTypes from 'prop-types';
import Card from '../Card';

const ExpenseItem = (props) => {
    const { date = new Date(), title = '', amount = 0 } = props;
    const handleTitle = () => {
        console.log('Change title')
    }

    return (
        <Card classes="expense-item">
           <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{`$ ${amount}`}</div>
            </div>
            <button onClick={handleTitle}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;

ExpenseItem.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};