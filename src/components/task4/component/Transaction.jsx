
export const Transaction = ({ id, type, amount, currency }) => {
    return (
        <tr className="" key={id}>
          <td >{type}</td>
          <td> {amount}</td>
          <td>{currency}</td>
        </tr>
        
    );
};


export default Transaction;


