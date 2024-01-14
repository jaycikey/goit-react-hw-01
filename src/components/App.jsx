import { Profile } from "./Profile/Profile";
import userData from './userData.json';
import { FriendList } from './FriendList/FriendList';
import friendsData from './friends.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import transactionsData from './transactions.json'

export const App = () => {
  return (
    <div>
      <Profile items={userData}
      />
      <FriendList items={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};