import React from 'react';
import './links.css'; // Import the CSS file for styling

export const Links = () => {
  return (
    <div className="links-container"> {/* Add a wrapper div */}
      <div className="links">
      <a href="https://x.com/mofasasi" target="_blank" rel="noopener noreferrer">X/Twitter   </a>
      <a href="https://github.com/Mosamorphing" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/mosadoluwa-fasasi-4008b81a9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      {/* <a href="mailto:mosadoluwamorphing@gmail.com" className="email-link">Email</a> */}
      </div>
    </div>
  );
}

export default Links;
