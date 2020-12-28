import React from "react";
import { useHistory } from "react-router-dom";

// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useSelector } from "react-redux";

import { smallImage } from "../util";

// Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

const GameDetail = ({ pathID }) => {
    // useHistory to manipulate path
    const history = useHistory();

    // Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;

        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            history.push("/");
        }
    };

    // Platform Image Handler
    const getPlatform = (platform) => {
        switch (platform) {
            case "playstation":
                return playstation;
            case "xbox":
                return xbox;
            case "steam":
                return steam;
            case "nintendo":
                return nintendo;
            case "apple":
                return apple;
            default:
                return gamepad;
        }
    };

    // Data
    const { screen, game, isLoading } = useSelector((state) => state.detail);
    console.log(game.platforms);

    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={pathID}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathID}`}>
                                    {game.name}
                                </motion.h3>
                                <p>Rating: {game.rating}</p>
                            </div>

                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map((data) => (
                                        <img
                                            key={data}
                                            alt={data}
                                            src={getPlatform(data)}
                                        />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>

                        <Media>
                            <motion.img
                                layoutId={`image ${pathID}`}
                                src={smallImage(game.background_image, 1280)}
                                alt={game.background_image}
                            />
                        </Media>

                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>

                        <div className="gallery">
                            {screen.results.map((screen) => (
                                <img
                                    src={smallImage(screen.image, 1280)}
                                    alt={screen.image}
                                    key={screen.id}
                                />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }

    &::-webkit-scrollbar-track {
        background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;

    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: right;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;

    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;

    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetail;
