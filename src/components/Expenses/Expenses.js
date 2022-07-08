import Card from '../UI/Card';
import './Expenses.css';
import './ExpensesFilter';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import React, { useState } from 'react';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(item => item.date.getFullYear() == filteredYear);

  return (
  <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  </div>
);
};

export default Expenses;
