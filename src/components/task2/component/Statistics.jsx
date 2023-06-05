import './Statistics.css';
import PropTypes from "prop-types";
import Stats from './Stats.jsx';


export const Statistics = ({ title, stats }) => {

    return (<section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list"> {stats.map(Stats)}</ul>
    </section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default Statistics;