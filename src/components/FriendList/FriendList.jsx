import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={css.friend_list}>
      {friends.map((friend) => (
      <FriendListItem key={friend.id} friend={friend}></FriendListItem>
      ))}
    </ul>
  );

  const FriendListItem = ({ friend}) => (
        <li className={css.item}>
          <span className={`${css.status} ${friend.isOnline ? css.online : css.offline}`}></span>
          <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
          <p className={css.name}>{friend.name}</p>
        </li>
  );
  
  export default FriendList;