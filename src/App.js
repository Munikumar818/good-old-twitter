import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import PageLoading from "./pages/PageLoading";
import Feed from "./pages/Feed/Feed";
import Explore from "./pages/Explore/Explore";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/Profile/Profile";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Lists from "./pages/Lists/Lists";
import Messages from "./pages/Messages/Messages";
import More from "./pages/More/More";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}>
        <Route index element={<Feed/>}>

        </Route>
      </Route>
      
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}>
      <Route path="feed" element={<Feed/>}/>
      <Route path="explore" element={<Explore/>}/>
      <Route path="notifications" element={<Notifications/>}/>
      <Route path="messages" element={<Messages/>}/>
      <Route path="bookmarks" element={<Bookmarks/>}/>
      <Route path="lists" element={<Lists/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="More" element={<More/>}/>
      </Route>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path='/page-loading' element={<PageLoading/>}/>
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
