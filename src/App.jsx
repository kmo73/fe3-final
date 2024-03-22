import { Route, Routes } from 'react-router-dom'
import { routes } from './Components/utils/routes';
import Home from './Routes/Home';
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'


function App() {
  return (
      <>
        <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
          <Route path={routes.dentist} element={<Detail/>}/>
          <Route path={routes.favs} element={<Favs/>}/>
        </Routes>
      </>
  );
}

export default App;
