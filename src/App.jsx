import { Route, Routes } from 'react-router-dom';
import { routes } from './Components/utils/routes';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import style from './styles/styles.module.css'
import { useGlobalContext } from './Components/utils/global.context';


function App() {
      const {state} = useGlobalContext()
      const {theme} = state
      // style.dark o light

      return ( 
            <div className={style[theme]}>
                  <Navbar/>
                  <Routes>
                        <Route exact path={routes.home} element={<Home/>}/>
                        <Route path={routes.contact} element={<Contact/>}/>
                        <Route path={routes.dentist} element={<Detail/>}/>
                        <Route path={routes.favs} element={<Favs/>}/>
                  </Routes>
                  <Footer/>
            </div>
      );
}

export default App;
