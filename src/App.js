import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Options from './Components/Options/Options';
import Navbar from './Components/Navbar/Navbar';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginContainer from './Components/Login/LoginContainer';
import { connect } from 'react-redux';
import {initializeApp} from './Redux/appReducer'
import { compose } from 'redux';
import Preloader from './Components/common/Preloader/Preloader';
import store from './Redux/redux-store';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()

    setInterval(() => {
      store.dispatch({type: 'FAKE'})
    }, 1000)
  }

  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' 
                 render={ () => <ProfileContainer /> } 
          />
          <Route path='/dialogs' 
                 render={() => <DialogsContainer /> }
          />
          <Route path='/news' render={() => <News /> } />
          <Route path='/music' render={() => <Music /> } />
          <Route path='/settings' render={() => <Options /> } />
          <Route path='/users' render={() => <UsersContainer /> } /> 
          <Route path='/login' render={() => <LoginContainer /> } /> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized}) 

export default compose(
  withRouter, 
  connect(mapStateToProps, {initializeApp}))(App)


