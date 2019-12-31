import React from 'react';
import UserForm from './components/UserForm';
import signin from './components/signin';
import frontpage from './components/frontpage'
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <frontpage />
      <br/> */}
    <Route path='/' exact component={frontpage}/>
    <Route path='/signin' component={signin} />
    <Route path='/signup' component={UserForm} />
    </div>
    </Router>
  );
}

export default App;