import React, { useState } from 'react';
import './styles.css';

function TextInput() {
  const [text, setText] = useState('');

  return (
    <div className="container">
      <input
        type="text"
        placeholder="type here"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
}

export default TextInput;
