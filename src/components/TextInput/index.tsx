import React, { useState } from 'react';

interface Props {
  color: string;
  backgroundColor: string;
}

export default function TextInput({ color, backgroundColor }: Props) {
  const [text, setText] = useState('');

  return (
    <div className="container">
      <input type="text"
             placeholder="type here"
             value={text}
             onChange={e => setText(e.target.value)}
             style={{ color, backgroundColor }}
      />
      <p>{text}</p>
    </div>
  );
}
