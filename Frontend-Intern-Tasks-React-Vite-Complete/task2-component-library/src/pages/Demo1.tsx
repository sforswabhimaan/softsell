import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Alert from '../components/Alert';

const Demo1: React.FC = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Demo 1: Input + Button + Alert</h1>
      {submitted && <Alert message={`Hello, ${name}!`} />}
      <Input value={name} onChange={setName} placeholder="Enter your name" />
      <div className="mt-4">
        <Button onClick={() => setSubmitted(true)}>Submit</Button>
      </div>
    </div>
  );
};

export default Demo1;
