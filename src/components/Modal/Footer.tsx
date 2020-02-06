import React from 'react';

interface CustomCss extends React.CSSProperties {
  '--bgColor': string  
}

const Footer: React.FC<{ 
  style?: React.CSSProperties,
  bgColor?: string
}> = ({ children, style, bgColor }) => {
  const ss = {...style} as CustomCss;
  if(bgColor){
    ss['--bgColor'] = bgColor
  }
  return (
    <footer className='modal-footer' style={ss}>
      {children}
    </footer>
  )
}

export default Footer