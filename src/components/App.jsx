import jsonprofile from './task1/utils/user.json';
import Profile from './task1/component/Profile';
import Statistics from './task2/component/Statistics';
import jsonData from './task2/utils/data.json';

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
    </div>
  );
};
