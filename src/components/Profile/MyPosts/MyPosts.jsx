import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPost, updateNewPostText } from "../../../redux/profileReducer";
import { useDispatch, useSelector } from "react-redux";

export default function MyPosts() {
  const postMessage = useSelector((state) => state.profile.postMessage);
  const posts = useSelector((state) => state.profile.posts);
  const dispatch = useDispatch();

  const postsElems = posts.map((post) => (
    <Post message={post.message} like={post.countLikes} key={post.id} />
  ));

  const onPostAdd = () => {
    dispatch(addPost());
  }

  const onPostChange = (e) => {
    const text = e.target.value;
    dispatch(updateNewPostText(text));
  }

  return (
    <div className={s.posts_block}>
      <div>
        <h2 className={s.title}>My posts</h2>
        <textarea onChange={onPostChange} className={s.textarea} placeholder="enter your post..." value={postMessage} />
        <button onClick={onPostAdd} className="btn">Send</button>
      </div>
      <div className={s.posts}>{postsElems}</div>
    </div>
  );
}
