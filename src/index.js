import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe, addPost, updateNewPostText,
  addDialogMessage, updateNewDialogMessage} from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App 
        state={state} 
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addDialogMessage={addDialogMessage}
        updateNewDialogMessage={updateNewDialogMessage}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
