export const FriendListItem = props =>{
    console.log(props);
    return (
        <li>
            <img src={props.data.avatar}/>
            <h3>{props.data.name}</h3>
        </li>
    )
}