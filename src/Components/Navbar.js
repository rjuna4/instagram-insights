import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
//import { FaBars } from "react-icons/fa";
 
const Navbar = () => {
    return (
        <>
            <Nav>
            <NavLink to="/Home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/About" activeStyle>
                        About
                    </NavLink>
            </Nav>
        </>
    );
};
 
export default Navbar;

const Nav = styled.nav`
    background: #ac9cff;
    height: 85px;
    display: flex;
    justify-content: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    font-size: calc(5px + 2vmin);
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #423874;
        font-weight: bold;
    }
`;