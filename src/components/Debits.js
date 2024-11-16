/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Debits = (props) => {
  const { debits, addDebit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target.description.value;
    const amount = parseFloat(e.target.amount.value).toFixed(2);
    const date = new Date().toISOString().slice(0, 10);
    addDebit({ id: Date.now(), description, amount, date });
  };

  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>
      <ul>
        {debits.map(debit => (
          <li key={debit.id}>{debit.amount} {debit.description} {debit.date.slice(0,10)}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" required />
        <input type="number" name="amount" required />
        <button type="submit">Add Debit</button>
      </form>
      <Link to="/">Return to Home</Link>
    </div>
  );
}


export default Debits;