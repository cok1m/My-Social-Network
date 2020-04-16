import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import { Route } from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Options from './Components/Options/Options';
import Navbar from './Components/Navbar/Navbar';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile' 
               render={ () => <Profile /> } 
        />
        <Route path='/dialogs' 
               render={() => <DialogsContainer /> }
        />
        <Route path='/news' render={() => <News /> } />
        <Route path='/music' render={() => <Music /> } />
        <Route path='/settings' render={() => <Options /> } />
        <Route path='/users' render={() => <UsersContainer /> } /> 
      </div>
    </div>

  )
}


export default App;
