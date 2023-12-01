import { useDispatch, useSelector } from "react-redux";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessage, updateNewMessage } from "../../redux/dialogReducer";

export default function Dialogs() {
  const dialogs = useSelector((state) => state.dialogs.dialogs);
  const messages = useSelector((state) => state.dialogs.messages);
  const messageText = useSelector((state) => state.dialogs.messageText);
  const dispatch = useDispatch();

  const dialogsElems = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  const messagesElems = messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  const onMessageAdd = () => {
    dispatch(addMessage());
  }

  const onMessageChange = (e) => {
    const text = e.target.value;
    dispatch(updateNewMessage(text));
  }

  return (
    <div className={style.dialogs}>
      <h2 className={style.title}>Dialogs</h2>
      <div className={style.users}>
        <div className={style.users__items}>{dialogsElems}</div>
        <div className={style.messages_block}>
          <div className={style.messages}>{messagesElems}</div>
          <div className={style.send_message}>
            <textarea onChange={onMessageChange} placeholder="your message..." value={messageText} ></textarea>
            <button onClick={onMessageAdd} className="btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
