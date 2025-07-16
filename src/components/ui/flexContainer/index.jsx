import React from 'react';

const FlexContainer = ({ children, ...props }) => {
  return (
    <div {...props}>{children}</div>
  );
};

export default FlexContainer;
