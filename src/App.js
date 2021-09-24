import React,{lazy,Suspense} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


function App() {

  const Login=lazy(()=>import('./login/login'))
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch >
          <Route path='/login' component={Login}/>
        </Switch>
       </Suspense>
      </Router>
    </div>
  );
}

export default App;
