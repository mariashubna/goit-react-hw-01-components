import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/FriendList/friends.json';
import items from '../components/TransactionHistory/transactions.json'
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
