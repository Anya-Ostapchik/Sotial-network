import Preloader from "../../Users/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/imgs/ava.jpg";

export default function ProfileInfo({profile}) {
  // debugger;
  if(!profile){
    return(
      // <Preloader />
      <div>
        <img
          className={style.bg_img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        />
        <div className={style.user}>
          <img src={userPhoto} />
          <div className={style.about}>
            <p className={style.desc}>I'am boss</p>
            <p>I am looking for a job</p>
          </div>
        </div>
        </div>
    )   
  } else{
    return (
      <div>
        <img
          className={style.bg_img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        />
        <div className={style.user}>
          <img src={profile.photos.large ? profile.photos.large : userPhoto} />
          <div className={style.about}>
            <p className={style.desc}>{profile.aboutMe}</p>
            {profile.lookingForAJob ? <><p>I am looking for a job</p><p>{profile.lookingForAJobDescription}</p></> : 'I am not looking for a job'}
          </div>
        </div>
      </div>
    );
  }
}
