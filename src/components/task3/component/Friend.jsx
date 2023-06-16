import '../component/FriendList.css';


export const Friend = ({ name, avatar, isOnline, id }) => {
    return (
        <li className="items" key={id}>
            <span  className={isOnline ? 'status available' : 'status not-available'}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="60" />
            <p className="name">{name}</p>
        </li>
    );
};

export default Friend;

