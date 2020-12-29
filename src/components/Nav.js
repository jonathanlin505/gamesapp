import React from "react";

// Animations
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../img/logo.svg";

const Nav = () => {
    return (
        <StyledNav>
            <Logo>
                <img src={logo} alt="Ignite" />
                <h1>Ignite</h1>
            </Logo>

            <div className="search">
                <input type="text" />
                <button>Search</button>
            </div>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;

    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem 0rem 0.5rem 1.3rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        outline: none;
        border-radius: 2rem 0 0 2rem;
        font-weight: bold;
    }

    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
        border-radius: 0 2rem 2rem 0;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;

    img {
        height: 2rem;
        width: 2rem;
    }
`;

export default Nav;
