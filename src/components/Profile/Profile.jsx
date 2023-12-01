import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

export default function Profile({profile}) {
  return (
    <>
      <ProfileInfo profile={profile} />
      <MyPosts />
    </>
  );
}
