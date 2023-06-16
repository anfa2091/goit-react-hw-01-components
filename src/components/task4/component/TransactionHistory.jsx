import './TransactionHistory.css';
import PropTypes from "prop-types";
import Transaction from './Transaction.jsx';

export const TransactionHistory = ({ items }) => {
  return (<section className="transaction-container">
    <table className="transaction-history">
  <thead>
    <tr className='transaction-title'>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

      <tbody>
        {items.map(Transaction)}        
      </tbody>
</table>
     
    </section>
    );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistory;





