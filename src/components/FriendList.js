import { FriendListItem } from "./FriendListItem"

export const FriendList = (props) =>{
    return (
        <ul class="friend-list">
 { props.data.map(friend => {
    return <FriendListItem data = {friend} />
 })
 }
</ul>
    )
}