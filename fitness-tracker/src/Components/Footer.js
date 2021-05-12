import React from 'react'
import "./Footer.css";

function Footer() {
    return (
      <div className="main-footer" style={{bottom: -80}}>
            <p className="col-sm">
              &copy;{new Date().getFullYear()} SA FITNESS | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
    );
    }

export default Footer
