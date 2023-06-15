function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export const Stats = ({ id, label, percentage }) => {
    return (
        <li className="item" key={id} style={{ backgroundColor: randomHexColor() }}>
            <span className="labelStats"> {label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
    );
};


export default Stats;