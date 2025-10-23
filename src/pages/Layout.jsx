
import React from 'react';

export default function Layout({ children, currentPageName }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif !important;
        }

        html, body {
          overflow-x: hidden;
          width: 100%;
        }
      `}</style>
      {children}
    </>
  );
}
