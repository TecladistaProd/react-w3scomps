import React from 'react';

interface CustomCss extends React.CSSProperties {
  '--bgColor': string;
}

const Body: React.FC<{
  style?: React.CSSProperties;
  bgColor?: string;
}> = ({ children, style, bgColor }) => {
  const ss = { ...style } as CustomCss;
  if (bgColor) {
    ss['--bgColor'] = bgColor;
  }
  return (
    <section className="modal-body" style={ss}>
      {children}
    </section>
  );
};

export default Body;
