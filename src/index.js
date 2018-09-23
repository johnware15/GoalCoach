import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { firebaseApp } from './firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log('User has signed in or up', user);
  } else {
    console.log('User has signed out or still needs to sign in.');
  }
})

ReactDOM.render(
  <BrowserRouter><div>
    <Route path='/app' component={App} />
    <Route path='/signin' component={SignIn} />
    <Route path='/signup' component={SignUp} />
    </div>
  </BrowserRouter>, document.getElementById('root')
)
