import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
    const stringPathID = id.toString();

    // Scroll Fix
    const history = useHistory();
    if (history.location.pathname === "/") {
        document.body.style.overflow = "auto";
    } else {
        document.body.style.overflow = "hidden";
    }

    // Load Game Details
    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
    };

    return (
        <StyledGame layoutId={stringPathID} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathID}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img
                    layoutId={`image ${stringPathID}`}
                    src={smallImage(image, 640)}
                    alt={name}
                />
            </Link>
        </StyledGame>
    );
};

// Styled
const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;
