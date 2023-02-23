import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="top-container">
        <h1 className="title">Join our community</h1>
        <h3 className="sub-title">30-day, hassle-free money back guarantee</h3>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are srious about honing their
          skills.
        </p>
      </div>
      <div className="bottom-container">
        <div className="left-content">
          <h3>Monthly Subscription</h3>
          <h1>
            $29 <span>per month</span>
          </h1>
          <p>Full access for less than $1 a day</p>
          <button className="btn">Sign Up</button>
        </div>
        <div className="right-content">
          <h3>Why Us</h3>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
