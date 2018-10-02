import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer)

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log('User has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email))
    Route.push('/app');
  } else {
    console.log('User has signed out or still needs to sign in.');
    Route.replace('/signin')
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
