import React,{lazy,Suspense} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as ROUTES from './consants/routes'


function App() {

  const Login=lazy(()=>import('./pages/login/login'))
  const SignUp=lazy(()=>import('./pages/sign-up/signup'))
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch >
          <Route path={ROUTES.LOGIN} component={Login}/>
          <Route path={ROUTES.SIGN_UP} component={SignUp}/>
        </Switch>
       </Suspense>
      </Router>
    </div>
  );
}

export default App;
