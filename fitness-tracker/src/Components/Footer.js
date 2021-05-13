import React from 'react'
// import "./Footer.css";
import styled from 'styled-components'

function Footer() {
    return (
      <FooterContainer className="main-footer">
      <div className="footer-middle">
      <div className="container">
      <div className="row">
      </div>
            </div>
            </div>
            {/* footer bottom */}
            <div className= "footer-bottom">
             <p className="col-sm">
              &copy;{new Date().getFullYear()} SA FITNESS | All rights reserved |
              Terms Of Service | Privacy
            </p>
            </div>
          </FooterContainer>
    );
    }

export default Footer

const FooterContainer = styled.footer`
.footer-middle {
  background: var(--mainDark);
  color: var(--mainWhite);
}
ul{
  font-size: 13px;
}
.footer-bottom{
  padding-top: 2rem;
  padding-bottom: 1rem;
}
`;