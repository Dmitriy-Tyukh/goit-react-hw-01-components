import FriendListItems from './FriendListItems';
import PropTypes from 'prop-types';
import { Box } from 'constans/Box';

export default function FriendList({ friends }) {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      textAlign="center"
      width="20%"
      m={0}
      p={0}
    >
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItems
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};