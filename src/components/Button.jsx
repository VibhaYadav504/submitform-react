import React from 'react';

const Button = ({ icon, text, isOutLine ,...rest}) => {
  return (
    <button 
    {...rest}
    className={isOutLine ? 'outline' : 'primary-btn'}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
