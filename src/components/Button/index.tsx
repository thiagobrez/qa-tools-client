import React from 'react';

interface Props {
  color?: string;
  backgroundColor?: string;
  text: string;
}

export default function Button({ color, backgroundColor, text }: Props) {
  const buttonStyle = {
    width: '150px',
    height: '50px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
  };

  const textStyle = {
    fontSize: '22px',
    color,
  };

  return (
    <button style={buttonStyle}
            type="submit"
    >
      <span style={textStyle}>
        {text}
      </span>
    </button>
  );
}

Button.defaultProps = {
  color: '#000',
  backgroundColor: '#FFF',
};
