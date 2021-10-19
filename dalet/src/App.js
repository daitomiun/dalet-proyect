import Experiencia from './components/Experiencia';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import QuienSoy from './components/Quien-soy';
import Servicio from './components/Servicio';
import './sass/App.scss';

function App() {
  return (
   <>
    <Header/>
    <Logo/>
    <QuienSoy/>
    <Servicio/>
    <Experiencia/>
    <Footer/>
   </>
  );
}

export default App;
