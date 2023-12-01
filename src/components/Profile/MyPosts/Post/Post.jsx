import s from "./Post.module.css";

export default function Post(props) {
  return (
    <div className={s.item}>
      <img src="https://cs12.pikabu.ru/post_img/big/2022/10/24/2/1666571824193118478.jpg" />
      {props.message}
      <div>
        Like<span>{props.like}</span>
      </div>
    </div>
  );
};