import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./SearchPageFooter.css"

const FooterPage = () => {
        return (
            <div className="container-fluid stock-pal-footer-color">
            <MDBFooter color="blue" className="font-small pt-4 mt-4 stock-pal-footer-color-text">
                    <div className="footer-copyright text-center py-3">
                            <MDBContainer fluid>
                                    &copy; {new Date().getFullYear()} Powered by AlphaVantage.
                                    Developed by Rohit Raikhy.
                            </MDBContainer>
                    </div>
            </MDBFooter>
            </div>
        );
}

export default FooterPage;
