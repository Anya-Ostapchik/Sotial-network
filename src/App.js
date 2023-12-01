import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { UsersContainer } from "./components/Users/UsersContainer";
import Music from "./components/Music/Music";
import Nav from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userID?" element={<ProfileContainer />} />
          <Route path="/messages/*" element={<Dialogs />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}