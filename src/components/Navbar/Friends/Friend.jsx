import style from "./Friend.module.css";

export default function Nav(props) {
  return (
    <div className={style.friend}>
      <img src={props.src} />
      <p>{props.name}</p>
    </div>
  );
}
