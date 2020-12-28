import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

// Action Creator
export const loadDetail = (id) => async (dispatch) => {
    // FETCH Axios
    const detailData = await axios.get(gameDetailsURL(id));
    const screenshotData = await axios.get(gameScreenshotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenshotData.data,
        },
    });
};
