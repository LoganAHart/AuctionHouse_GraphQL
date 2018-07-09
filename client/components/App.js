import React from 'react';
//materialize css assumes we are using some root component
//with the class name of container
export default ({ children }) => {
  return <div className="container">{children}</div>;
};
