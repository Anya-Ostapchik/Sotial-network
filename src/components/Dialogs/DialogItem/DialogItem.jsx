import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.user}>
      <img src="https://cs12.pikabu.ru/post_img/big/2022/10/24/2/1666571824193118478.jpg" alt="Avatar" />
      <NavLink to={props.id} className={({ isActive }) => (isActive ? s.active : s.user__name)} >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;