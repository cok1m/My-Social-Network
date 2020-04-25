import React, { Suspense } from 'react';
import './App.css';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Options from './Components/Options/Options';
import Navbar from './Components/Navbar/Navbar';
import Users from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/LoginContainer';
import { connect, Provider } from 'react-redux';
import {initializeApp} from './Redux/appReducer'
import { compose } from 'redux';
import Preloader from './Components/common/Preloader/Preloader';
import store from './Redux/redux-store';
import withSuspense from './Components/hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' 
                render={withSuspense(ProfileContainer) }
          />
          <Route path='/dialogs' 
                render={withSuspense(DialogsContainer) }
          />
          <Route path='/news' render={() => <News /> } />
          <Route path='/music' render={() => <Music /> } />
          <Route path='/settings' render={() => <Options /> } />
          <Route path='/users' render={() => <Users /> } /> 
          <Route path='/login' render={() => <Login /> } /> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized}) 

let AppContainer = compose(
  withRouter, 
  connect(mapStateToProps, {initializeApp}))(App)


const MainApp = (props) => {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
  )
}

export default MainApp