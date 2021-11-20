import React, { useState } from "react";
import PropTypes from 'prop-types';

const DEFAULT_FORM_DATA = {
    title: '',
    amount: 0,
    date: new Date(),
}

const ExpenseForm = (props) => {
    const { onChange } = props;
    const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
    const [openForm, setOpenForm] = useState(false);

    const handleChange = (key) => (e) => {
        if (Object.keys(DEFAULT_FORM_DATA).includes(key)) {
            const value = key ==='date' ? new Date(e.currentTarget.value) : key ==='amount' ? parseFloat(e.currentTarget.value) : e.currentTarget.value;
            setFormData((prevProps) => {
                return {...prevProps, [key]: value };
            });
        }
    }

    const formatDate = (toFormatDate) => {
        const month = toFormatDate.toLocaleDateString('en-US', { month: '2-digit' });
        const year = toFormatDate.getFullYear();
        const date = toFormatDate.toLocaleDateString('en-US', { day: '2-digit' });
        return `${year}-${month}-${date}`;
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (openForm) {    
            onChange(formData);
            setFormData(DEFAULT_FORM_DATA);
        }
        setOpenForm(!openForm);
    }

    const handeCancelForm = () => {
        setOpenForm(false);
    }
    
    return <form onSubmit={handleSubmitForm}>
        {
            openForm && (<div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleChange('title')} defaultValue={formData.title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" name="amount" min="0.01" step="0.01" defaultValue={formData.amount.toString()} onChange={handleChange('amount')} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" name="date" min="2020/01/31" max="2025/12/31" onChange={handleChange('date')} value={formatDate(formData.date)} />
                </div>
            </div>)
        }
        <div className="new-expense__actions">
            {openForm && (<button onClick={handeCancelForm}>Cancel</button>)}
            <button>Submit</button>
        </div>
    </form>;
}

export default ExpenseForm;

ExpenseForm.propTypes = {
    onChange: PropTypes.func.isRequired,
}