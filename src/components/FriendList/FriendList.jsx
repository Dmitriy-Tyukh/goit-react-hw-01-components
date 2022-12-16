import FriendListItems from './FriendListItems';
import { Box } from 'constans/Box';

export default function FriendList({ friends }) {
  return (
    <Box as="ul" display="flex" flexDirection="column" textAlign="center" width="20%" m={0} p={0}>
      
        <FriendListItems friends={friends} />;

    </Box>
  );
}


