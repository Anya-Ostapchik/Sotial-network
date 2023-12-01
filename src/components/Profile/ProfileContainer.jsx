import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "../../redux/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

class ProfileAPIContainer extends React.Component {
  componentDidMount(){
    if(this.props.params.userID){
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.params.userID}`)
      .then(resp => {
        this.props.dispatch(setUserProfile(resp.data));
      });
    }
  }

  render(){
    return <Profile profile={this.props.profile} />;
  }
}

export function ProfileContainer() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const params = useParams();

  // useEffect(() => {
    //   if(params.userID){
    //   //   fetch(`https://social-network.samuraijs.com/api/1.0/profile/${params.userID}`)
    //   //   .then(response => response.json())
    //   //   .then(result => {
    //   //     console.log(result);
    //   //     dispatch(setUserProfile(result))});
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userID}`)
    //     .then(resp => {
    //       console.log(resp);
    //       dispatch(setUserProfile(resp.data));
    //     });
    //   }
    // })
 
  return <ProfileAPIContainer dispatch={dispatch} {...profile} params={params} />;
}

export default ProfileContainer;