import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import MobileNavBar from './components/NavBar/MobileNavBar';
import Projects from './views/Projects';
import About from './views/About';
import Skills from './views/Skills';
// import Process from './views/Process';
import UnderConstruction from './views/UnderConstruction';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MobileNavBar />
      <main>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/process" exact component={UnderConstruction} />
          <Route path="/" exact component={Projects} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
