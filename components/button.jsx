import React from 'react';

const Button = ({ children, onClick }) => {
  const handleOnClick = () => {
    onClick('hey clicked');
  };
  return <button onClick={handleOnClick}>{children}</button>;
};

export default Button;
