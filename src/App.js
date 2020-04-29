import React from 'react';
import './App.css';
import { Route, withRouter, HashRouter, Switch, Redirect } from 'react-router-dom';
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
  catchAllUnhandledRejection = (promiseRejectionEvent) => {
    console.log("ERROR")
  }
  
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", (promiseRejectionEvent) => {
      this.catchAllUnhandledRejection(promiseRejectionEvent)
    })
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", (promiseRejectionEvent) => {
      this.catchAllUnhandledRejection(promiseRejectionEvent)
    })
  }

  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Redirect exact from="/" to="/profile" />
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
            <Route path='*' render={() => <div><h1>404 PAGE NOT FOUND</h1></div>} />
          </Switch>
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
    <HashRouter >
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
  )
}

export default MainApp