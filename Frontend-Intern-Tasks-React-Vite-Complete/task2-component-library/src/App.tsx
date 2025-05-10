import React from 'react';
import Demo1 from './pages/Demo1';
import Demo2 from './pages/Demo2';

const App: React.FC = () => {
  return (
    <div>
      <Demo1 />
      <hr className="my-10" />
      <Demo2 />
    </div>
  );
};

export default App;
