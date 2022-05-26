import { useState } from 'react';

const SecondContainer = () => {
  const [links, setLinks] = useState([
    { name: 'https://www.frontendmentor.io', shortLink: 'htpps//.red' },
    {
      name: 'https://twotter.com/frontendmentor.io',
      shortLink: 'htpps//.red/green/n',
    },
    { name: 'https://www.frontendmentor.io', shortLink: 'htpps//.bluee' },
  ]);
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  return (
    <>
      <div className='App'>
        <div className='midSection'>
          <div className='inside'>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type='text'
              placeholder='Short a link here...'
              className={error ? 'input-error' : ''}
            />
            <button
              onClick={(e) => {
                if (!text) {
                  setError('please add a link');
                  setTimeout(() => {
                    setError('');
                  }, 2000);
                  return;
                }

                fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
                  .then((res) => {
                    return res.json();
                  })
                  .then((data) => {
                    const updatedLinks = [
                      ...links,
                      {
                        name: text,
                        shortLink: data.result.full_short_link2,
                      },
                    ];
                    setLinks(updatedLinks);
                    setText('');
                  });
              }}
            >
              shorten It!
            </button>
            {error ? <p className='error'>{error}</p> : null}
          </div>
        </div>
      </div>
      <div
        style={{
          color: 'green',
          backgrond: 'white',
        }}
      ></div>

      <div className='second-container'>
        <div className='content'>
          <div className='headingtext'>
            <div className='link-div'>
              {links.map((li, index) => (
                <div key={li.name + index} className='link-wrap'>
                  <p className='pf'>{li.name}</p>
                  <p>{li.shortLink}</p>
                  <button
                    onClick={(e) => {
                      navigator.clipboard.writeText(
                        e.target.parentElement.querySelector('p:nth-child(2)')
                          .textContent
                      );

                      e.target.textContent = 'copied';
                      e.target.style.backgroundColor = 'rgb(11, 11, 65)';
                      setTimeout(() => {
                        e.target.textContent = 'copy';
                        e.target.style.backgroundColor = ' hsl(180, 66%, 49%)';
                      }, 2000);
                    }}
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>

            <h2>Advaced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
          </div>

          <div className='text-boxes'>
            <div className='box1'>
              <div className='img-wrap'>
                <img src='/icon-brand-recognition.svg' alt='' />
              </div>
              <h2>Brand recognition</h2>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.{' '}
              </p>
            </div>
            <div className='box2'>
              <div className='img-wrap'>
                <img src='/icon-detailed-records.svg' alt='' />
              </div>
              <h2>Detailed Records</h2>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className='box3'>
              <div className='img-wrap'>
                <img src='/icon-fully-customizable.svg' alt='' />
              </div>
              <h2>Fully Customizable</h2>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondContainer;
