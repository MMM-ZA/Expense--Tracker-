import React, { useState } from 'react';
import ExpensesList from './ExpensesList';

import Card from './Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const FilteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>

     <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={FilteredExpenses}/>
      <ExpensesList items={FilteredExpenses}/>
     </Card>
    </div>
  );
}

export default Expenses;
