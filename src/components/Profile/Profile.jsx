import PropTypes from 'prop-types';
import defaultImg from './default.jpg';
import { Box } from 'constans/Box';

import {
  Avatar,
  UserName,
  UserTag,
  Location,
  Item,
  Lable,
  Quantity,
} from './Profile.styled';

export default function Profile({
  avatar = defaultImg,
  username = 'unknown',
  tag = 'unknown',
  location = 'unknown',
  stats: { followers, views, likes },
}) {
  return (
    <Box
      width="20%"
      textAlign="center"
      border={1}
      borderStyle="solid"
      borderColor="darkgrey"
      boxShadow="0px 1px 8px 1px rgba(0, 0, 0, 0.5)"
    >
      <Box textAlign="center">
        <Avatar src={avatar} alt={username} width={150} />
        <UserName>{username}</UserName>
        <UserTag>@ {tag}</UserTag>
        <Location>{location}</Location>
      </Box>
      <Box as="ul" display="flex" flexDirection="row" mt={5} mb={0} p={0}>
        <Item>
          <Lable>Followers</Lable>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Lable>Views</Lable>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Lable>Likes</Lable>
          <Quantity>{likes}</Quantity>
        </Item>
      </Box>
    </Box>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
