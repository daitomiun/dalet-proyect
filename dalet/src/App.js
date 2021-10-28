import Experiencia from './components/Experiencia';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import QuienSoy from './components/Quien-soy';
import Servicio from './components/Servicio';
// import ScriptTag from "react-script-tag";
import './sass/App.scss';

function App() {
  return (
    <>
      <Header />
      <Logo />
      <QuienSoy />
      <Servicio />
      <Experiencia />
      <Footer />
      
      {/* <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src="./components/carousel.js"
      /> */}
    </>
  );
}





export default App;
