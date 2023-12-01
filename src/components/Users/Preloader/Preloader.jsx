import preloader from '../../../assets/imgs/preloader.svg';
import style from "./Preloader.module.css";

const Preloader = () => {
    return(
        <div className={style.preloader}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;