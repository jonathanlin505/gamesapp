const initState = {
    game: { platforms: [] },
    screen: { results: [] },
    isLoading: true,
};

const uniquePlatformHandler = (platform) => {
    switch (platform) {
        case "PlayStation 4":
            return "playstation";
        case "PlayStation 5":
            return "playstation";
        case "Xbox Series S/X":
            return "xbox";
        case "Xbox S":
            return "xbox";
        case "Xbox One":
            return "xbox";
        case "PC":
            return "steam";
        case "Nintendo Switch":
            return "nintendo";
        case "iOS":
            return "apple";
        default:
            return "gamepad";
    }
};

const uniquePlatforms = (platform) => {
    const repeatPlatforms = platform.platforms.map((data) =>
        uniquePlatformHandler(data.platform.name)
    );

    const uniqueSet = new Set(repeatPlatforms);

    platform.platforms = [...uniqueSet];

    return platform;
};

const detailReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: uniquePlatforms(action.payload.game),
                screen: action.payload.screen,
                isLoading: false,
            };
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            };
        default:
            return { ...state };
    }
};

export default detailReducer;
