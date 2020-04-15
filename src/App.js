import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Options from './Components/Options/Options';
import Navbar from './Components/Navbar/Navbar';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" 
          render={() => {
            return (
              <Profile 
                profilePage={props.state.profilePage} 
                dispatch={props.dispatch}
              />
            )}
          } 
        />
        <Route path="/dialogs" 
          render={() => {
            return (
              <Dialogs 
                dialogsPage={props.state.dialogsPage} 
                dispatch={props.dispatch}
              />
            )}
          } 
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Options />} />
      </div>
    </div>

  )
}


export default App;
