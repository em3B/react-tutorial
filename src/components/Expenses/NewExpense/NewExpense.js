import React, {useState} from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import './ExpenseForm.css';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {
        showForm && (<div><ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClick={() => showFormHandler()}></ExpenseForm>
          <div className='new-expense__actions'>
            <button onClick={showFormHandler}>Cancel</button>
          </div>
        </div>)
      }
      {
        !showForm && <button onClick={showFormHandler}>Add New Expense</button>
      }
    </div>
);
};

export default NewExpense;
