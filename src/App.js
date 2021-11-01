// import './App.scss';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

import TopNavigation from './Components/Pages/TopNavigation';
import VerticalNav from './Components/Pages/VerticalNav';
import Projects from './Components/Pages/Projects';
// import TopProjects from './Components/Pages/TopProjects';
import CreateProject from './Components/Pages/CreateProject';
// import DevProfile from './Components/Pages/DevProfile';

import '../src/Styles/main.scss';

const App = () => {
 
  return (
    <>

      {/* <TopNavigation /> */}
      {/* <Login /> */}
      {/* <Register /> */}

      {/* <VerticalNav /> */}
      {/* <DevProfile /> */}

      <CreateProject />

      {/* <Projects /> */}
      {/* <TopProjects /> */}
    </>
  );
}

export default App;