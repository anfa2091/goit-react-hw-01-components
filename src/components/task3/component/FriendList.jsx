import './FriendList.css';
import PropTypes from "prop-types";
import Friend from './Friend.jsx';

export const FriendList = ({ friends }) => {
  return (<section className="friend-container">
    <ul className="friend-list"> {friends.map(Friend)}
    </ul>
    
    </section>
    );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;