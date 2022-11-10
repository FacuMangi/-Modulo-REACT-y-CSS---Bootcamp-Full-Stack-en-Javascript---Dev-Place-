import './App.css';
import Form from './components/Form.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer';
import Productos from './components/Products';

function App() {
  return (
    <>
      <div className='nav-container'>
        <Nav />
      </div>
      <div className='container'>
        <Productos />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default App;
