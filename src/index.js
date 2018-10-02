import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { firebaseApp } from './firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore()

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log('User has signed in or up', user);
    BrowserRouter.push('/app');
  } else {
    console.log('User has signed out or still needs to sign in.');
    BrowserRouter.replace('/signin')
  }
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><div>
      <Route path='/app' component={App} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
)
