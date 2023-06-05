import jsonprofile from './task1/utils/user.json';
import Profile from './task1/component/Profile';

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
    </div>
  );
};
