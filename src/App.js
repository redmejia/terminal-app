// import './App.scss';
// import Login from './Components/Login/Login';
// import Register from './Components/Auth/Register';

// import Projects from './Components/Pages/Projects';
import TopNavigation from './Components/Pages/TopNavigation';
import VerticalNav from './Components/Pages/VerticalNav';
// import TopProjects from './Components/Pages/TopProjects';
import '../src/Styles/main.scss';
import DevProfile from './Components/Pages/DevProfile';

import {useDispatch, useSelector} from 'react-redux'

import { useEffect } from 'react';
import { getAllProjects } from '../src/features/projects/projects'

const App = () => {
  const dispatch = useDispatch()
  const { projects } = useSelector(state => state.projects);
  useEffect(() => {
    dispatch(getAllProjects())
}, [getAllProjects])

console.log(projects);
return (
  <>

    {/* <Login /> */}
    {/* <Register /> */}

    {/* <TopNavigation />
      <VerticalNav />
      <DevProfile /> */}


    {/* <Projects /> */}
    {/* <TopProjects /> */}
  </>
);
}

export default App;