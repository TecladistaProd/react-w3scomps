import React from 'react';

interface CustomCss extends React.CSSProperties {
  '--bgColor': string;
}

const Header: React.FC<{
  style?: React.CSSProperties;
  bgColor?: string;
}> = ({ children, style, bgColor }) => {
  const ss = { ...style } as CustomCss;
  if (bgColor) {
    ss['--bgColor'] = bgColor;
  }
  return (
    <header className="modal-header" style={ss}>
      {children}
    </header>
  );
};

export default Header;
