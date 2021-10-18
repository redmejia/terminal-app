// import './App.scss';
// import Login from './Components/Login/Login';
// import Register from './Components/Auth/Register';

import Projects from './Components/Pages/Projects';
import TopNavigation from './Components/Pages/TopNavigation';
import VerticalNav from './Components/Pages/VerticalNav';
// import TopProjects from './Components/Pages/TopProjects';
import '../src/Styles/main.scss';

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Register /> */}

      <TopNavigation />
      <VerticalNav />
      <Projects />
      {/* <TopProjects /> */}
    </>
  );
}

export default App;