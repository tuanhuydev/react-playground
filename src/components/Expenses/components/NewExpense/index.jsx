import React from "react";
import ExpenseForm from "../ExpenseForm";
import './styles.css';
import PropTypes from 'prop-types';

const NewExpense  = (props) => {
    const { onAddExpense } = props;

    return (
        <div className="new-expense">
            <ExpenseForm onChange={onAddExpense} />
        </div>
    )
};

export default NewExpense;

NewExpense.propTypes = {
    onAddExpense: PropTypes.func.isRequired
}