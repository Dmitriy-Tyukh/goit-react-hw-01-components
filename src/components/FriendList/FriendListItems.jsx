import { Item, Status, Avatar, FriendName } from './FriendsList.moduled';

export default function FriendListItems({ avatar, name, isOnline }) {
    return (
      <Item>
        <Status UserisOnline={isOnline} />
        <Avatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </Item>
    );
}

