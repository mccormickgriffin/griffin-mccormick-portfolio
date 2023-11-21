import React, { useState, useEffect } from 'react';

const ResponsiveComponent = ({ MobileComponent, DesktopComponent, breakpoint }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return (
    <>
      {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </>
  );
};

export default ResponsiveComponent;
