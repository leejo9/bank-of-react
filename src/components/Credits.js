/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Credits = (props) => {
  const { credits, addCredit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target.description.value;
    const amount = parseFloat(e.target.amount.value).toFixed(2);
    const date = new Date().toISOString().slice(0, 10);
    addCredit({ id: Date.now(), description, amount, date });
  };

  return (
    <div>
      <h1>Credits</h1>
      <ul>
        {credits.map(credit => (
          <li key={credit.id}>{credit.amount} {credit.description} {credit.date.slice(0,10)}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" required />
        <input type="number" name="amount" required />
        <button type="submit">Add Credit</button>
      </form>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;