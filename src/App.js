import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Nav />
                <div className="main-content">
                    <Routes>
                        <Route exact path="/" element={<Profile posts={props.appState.profilePage.posts}/>} />
                        <Route path="profile" element={<Profile posts={props.appState.profilePage.posts}/>} />

                        <Route  path="messages" element={<Dialogs contacts={props.appState.dialogsPage.contacts} messages={props.appState.dialogsPage.messages}/>} >
                            <Route path=":messageId" element={<Dialogs contacts={props.appState.dialogsPage.contacts} messages={props.appState.dialogsPage.messages}/>}/>
                        </Route>
                        <Route path="news" element={<News />} />
                        <Route path="music" element={<Music />} />
                        <Route path="settings" element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
