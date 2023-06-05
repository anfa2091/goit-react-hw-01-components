export const Stats = ({ id, label, percentage }) => {
    return (
        <li className="item" key={id}>
            <span className="labelStats"> {label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    );
};


export default Stats;