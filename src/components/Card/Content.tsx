import React from 'react';

const Content: React.FC = ({ children }) => {
  if (!children) throw new Error('You should pass children');

  return <div className="card-content">{children}</div>;
};

export default Content;
