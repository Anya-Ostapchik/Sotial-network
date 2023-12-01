import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentPage, setUsers, toggleIsFetching } from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";

class UsersAPIContainer extends React.Component {
  componentDidMount(){
    this.props.dispatch(toggleIsFetching(true));
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(resp => {
      this.props.dispatch(setUsers(resp.data.items));
      this.props.dispatch(toggleIsFetching(false));
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.dispatch(toggleIsFetching(true));
    this.props.dispatch(currentPage(pageNumber));
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(resp => {
      this.props.dispatch(setUsers(resp.data.items));
      this.props.dispatch(toggleIsFetching(false));
    });
  }

  render(){
    return <Users dispatch={this.props.dispatch} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} onPageChanged={this.onPageChanged} isFetching={this.props.isFetching}/>
  }
}

export function UsersContainer() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
 
  return <UsersAPIContainer dispatch={dispatch} users={users.users} pageSize={users.pageSize} totalUsersCount={users.totalUsersCount} currentPage={users.currentPage} isFetching={users.isFetching} />;
}