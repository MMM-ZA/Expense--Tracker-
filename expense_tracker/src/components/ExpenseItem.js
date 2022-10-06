import './ExpenseItem.css';

function ExpenseItem () {
  return (
 <div className="expense-item">
  <div>10 October 2022</div>
  <div className="expense-item__description">
     <h2>Rent</h2>
    <div className="expense-item__price">$700</div>
   </div>
 </div>
 );
}

export default ExpenseItem;
