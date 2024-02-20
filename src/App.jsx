import './App.css';
import { useState, useEffect } from 'react';
import Initialversion from './components/Initialversion.jsx';
import Testversion from './components/Testversion.jsx';

function App() {
  const [visitor, setVisitor] = useState(0);

  useEffect(() => {
    const randomizeVisitor = Math.random();
    if (randomizeVisitor > 0.5) {
      setVisitor(1);
    }
  }, []);

  const handleClick = () => {
    console.log({
      event: 'ctaClick',
      cta: 'button',
      version: visitor === 0 ? 'Test_version' : 'Initial_version',
    });
  };

  return (
    <>
      {visitor ? (
        <Initialversion handleClick={handleClick} />
      ) : (
        <Testversion handleClick={handleClick} />
      )}
    </>
  );
}

export default App;
