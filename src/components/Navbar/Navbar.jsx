import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Friend from "./Friends/Friend";
import { useSelector } from "react-redux";

export default function Nav() {
  const sidebar = useSelector((state) => state.sidebar);

  const friendElem = sidebar.friends.map((friend) => (
    <Friend name={friend.name} src={friend.img} key={friend.id} />
  ));

  return (
    <>
      <nav className={s.nav}>
        <ul>
          <li><NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item} to="profile">Profile</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item} to="messages">Messages</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item} to="users">Users</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item} to="news">News</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item} to="music">Music</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item} to="settings">Settings</NavLink></li>
        </ul>
        <div className={s.friends}>
          {friendElem}
        </div>
      </nav>
    </>
    
  );
};