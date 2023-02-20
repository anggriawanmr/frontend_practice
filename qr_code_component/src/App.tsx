import './App.css';
import image from './assets/image-qr-code.png';

function App() {
  return (
    <div className="container">
      <img src={image} alt="QR code image" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;
