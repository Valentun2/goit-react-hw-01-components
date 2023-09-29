import { FriendList } from "./FriendList";
import { Statistics } from "./Statistics";
import { Profile } from "./profile";
 
export const App = (props) => {
  console.log(props);
 const {stats,avatar,location,tag,username} = props.datauser
 console.log(username);
  return (
    <div>
      <Profile data = {props.datauser}/>
      <Statistics data = {props.data}/>
      <FriendList data = {props.friends} />
    </div>
  );
};
