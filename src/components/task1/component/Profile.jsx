import './profile.css';
import PropTypes from "prop-types";


export const Profile = ({ username, tag, location, avatar, stats }) => {
    
  return (<div className="container">
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
          width="200px"
        />
        <p className="name"><b>{username}</b></p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
        <ul className="stats">
          <li className="label">
            <span >Followers</span>
            <span className="quantity"><b>{stats.followers}</b></span>
          </li>
          <li className="label">
            <span>Views</span>
            <span className="quantity"><b>{stats.views}</b></span>
          </li>
          <li className="label">
            <span >Likes</span>
            <span className="quantity"><b>{stats.likes}</b></span>
          </li>
        </ul>
      </div>
    </div>

  </div>);
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile


