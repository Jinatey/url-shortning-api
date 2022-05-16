/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import FirstSection from './FirstSection';

function App() {
  return (
    <>
      <div className='App'>
        <FirstSection />

        <div className='midSection'>
          <input type='text' placeholder='Short a link here...' />
          <button>shorten It!</button>
        </div>
      </div>
      <div className='second-container'>
        <div className='headingtext'>
          <h2>Advaced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>

        <div className='text-boxes'>
          <div className='box1'>
            <div className="img-wrap">
            <img src='/icon-brand-recognition.svg' alt='' />

            </div>
            <h1>Brand recognition</h1>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.{' '}
            </p>
          </div>
          <div className='box2'>
            <div className="img-wrap">
              <img src="/icon-detailed-records.svg" alt="" />
            </div>
            <h1>Detailed Records</h1>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className='box3'>
            <div className="img-wrap">
              <img src="/icon-fully-customizable.svg" alt="" />
            </div>
            <h1>Fully Customizable</h1>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>

      <div className='third-container'>
        <h2>Boost your links today</h2>
        <button>Get started</button>
      </div>
    </>
  );
}

export default App;
