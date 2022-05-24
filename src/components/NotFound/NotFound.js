import React from "react";
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404 mb-8">
            <h1>Oops!</h1>
          </div>
          <h2>404 - Page not found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <a href="http://localhost:3000/">Go To Homepage</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
