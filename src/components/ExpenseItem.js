import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance 1';
  const expenseAmount = 100.25;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
