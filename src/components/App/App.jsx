import user from 'dataJsons/user.json';
import data from 'dataJsons/stat.json';
import friends from 'dataJsons/friends.json';
import transactions from 'dataJsons/transactions.json';

import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../Transaction/TransactionHistory';
import { Box } from '../../constans/Box';

export const App = () => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      p={4}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics titleStat="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
