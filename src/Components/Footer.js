import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterBox>
            <a>
            All Rights Reserved
            </a>
        </FooterBox>
    );
}
 
export default Footer;

const FooterBox = styled.div`
    color: #ac9cff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(2px + 2vmin);
    padding: 0 1rem;
    height: 85px;
`;