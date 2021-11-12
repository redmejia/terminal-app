// import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

import TopNavigation from './Components/Pages/TopNavigation';
import VerticalNav from './Components/Pages/VerticalNav';
import Projects from './Components/Pages/Projects';
import TopProjects from './Components/Pages/TopProjects';
import CreateProject from './Components/Pages/CreateProject';
import DevProfile from './Components/Pages/DevProfile';

import '../src/Styles/main.scss';

const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>


          <Route path="/projects">
            <TopNavigation />
            <VerticalNav />
            <Projects />
          </Route>

          <Route path="/plus-project">
            <TopNavigation />
            <VerticalNav />
            <TopProjects />
          </Route>

          <Route path="/super-user">
            <TopNavigation />
            <VerticalNav />
            <DevProfile />
          </Route>

          <Route path="/new-project">
            <TopNavigation />
            <CreateProject />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;