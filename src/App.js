import React,{lazy,Suspense} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as ROUTES from './consants/routes'


function App() {

  const Login=lazy(()=>import('./login/login'))
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch >
          <Route path={ROUTES.LOGIN} component={Login}/>
        </Switch>
       </Suspense>
      </Router>
    </div>
  );
}

export default App;
