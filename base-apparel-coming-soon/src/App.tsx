import { useState } from 'react';

import logo from './assets/logo.svg';
import banner from './assets/hero-desktop.jpg';
import background from './assets/bg-pattern-desktop.svg';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailValidation = () => {
    const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z{2,8}])?/;

    if (regex.test(email)) {
      setMessage('Email is valid');
    } else if (!regex.test(email) && email !== '') {
      setMessage('Email is not valid');
    } else {
      setMessage('Enter email address');
    }
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <div className="main">
      <div
        className="left_section"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="left_section--content">
          <div className="branding">
            <img src={logo} alt="logo" />
          </div>

          <div className="left_section--content-hero">
            <h1 className="hero_text">
              <span className="highlighted">we're</span> <br />
              coming <br />
              soon
            </h1>
            <p className="hero_desc">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <div className="email_container">
              <input
                id="email"
                className="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleOnChange}
              />
              <button onClick={emailValidation} className="btn">
                &gt;
              </button>
            </div>
            <div className="email_message">{message}</div>
          </div>
        </div>
      </div>
      <img src={banner} alt="banner" className="banner" />
    </div>
  );
}

export default App;
