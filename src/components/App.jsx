import jsonprofile from './task1/utils/user.json';
import Profile from './task1/component/Profile';
import Statistics from './task2/component/Statistics';
import jsonData from './task2/utils/data.json';
import jsonFriend from './task3/utils/friends.json';
import jsonTransaction from './task4/utils/transactions.json';
import FriendList from './task3/component/FriendList';
import TransactionHistory from './task4/component/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={jsonprofile.username}
        tag={jsonprofile.tag}
        location={jsonprofile.location}
        avatar={jsonprofile.avatar}
        stats={jsonprofile.stats}
      />

      <Statistics
        title="Upload Stats"
        stats={jsonData}
      />

      <FriendList
        friends={jsonFriend}
      />

      <TransactionHistory
        items={jsonTransaction}
      />

    </div>
  );
};
