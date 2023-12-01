import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/imgs/ava.jpg';
import { follow, unfollow } from '../../redux/usersReducer';
import Preloader from "./Preloader/Preloader";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for(let i = 1; i <= pageCount; i++){
      pages.push(i);
    }

    return (
      <>
        <div className={style.pagination}>
          {
            pages.map(elem => (<span key={elem} className={elem === props.currentPage ? style.active : ""} onClick={() => {props.onPageChanged(elem)}}>{elem}</span>))
          }
        </div>
        <div className={style.users}>
          {props.isFetching ?  <Preloader /> : null}
          {props.users.map((user) => (
            <div key={user.id} className={style.user}>
              <div className={style.user__profile}>
                <NavLink to={'/profile/' + user.id}>
                  <img className={style.user__img} src={user.photos.small != null ? user.photos.small : userPhoto} alt="Avatarka" />
                </NavLink>
                {user.followed ? <a href="#" className={style.user__btn} onClick={(e)=>{e.preventDefault(); props.dispatch(unfollow(user.id));}}>Follow</a> : <a href="#" className={style.user__btn} onClick={(e)=>{e.preventDefault(); props.dispatch(follow(user.id));}}>Unfollow</a>}
              </div>
              <div className={style.user__info_block}>
                <div className={style.user__nameCountry}>
                  <p>{user.name}</p>
                  <div>
                    <p>{'user.location.country'}</p>
                    <p>{'user.location.city'}</p>
                  </div>
                </div>
                <p className={style.user__status}>{user.status != null ? user.status : "I am boss"}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}

export default Users;