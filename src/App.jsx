
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import "./index.css"; // Глобальні стилі
import transactions from "./data/transactions.json";
import TransactionHistory from './components/Transactions/transactions.jsx'

const App = () => {
  return (
    <div className="container">
      {/* Карточка профілю */}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      {/* Список друзів */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
