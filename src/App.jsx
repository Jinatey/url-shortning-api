/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import FirstSection from './FirstSection';
import Navbar from './Navbar';
import SecondContainer from './SecondContainer';
import Footer from './Footer';
import './Navbar.css';

function App() {
  return (
    <>
      <Navbar />

      <FirstSection />

      <SecondContainer />

      <div className='third-container'>
        <h2>Boost your links today</h2>
        <button>Get started</button>
      </div>
      <Footer />
    </>
  );
}

export default App;
