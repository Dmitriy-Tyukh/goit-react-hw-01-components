import PropTypes from 'prop-types';
import { Item, Status, Avatar, FriendName } from './FriendsList.moduled';

export default function FriendListItems({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => (
      <Item key={id}>
          
      <Status UserisOnline={isOnline} />

      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Item>
  ));
}

FriendListItems.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};