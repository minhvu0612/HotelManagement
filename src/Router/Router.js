// Router In Website

import HomePage from "../Layout/HomePage/HomePage";
import IntroducePage from "../Layout/IntroducePage/IntroducePage";

export const router = [
    {
        path : '/',
        exact : false,
        main : <HomePage />
    },
    {
        path : '/gioi-thieu',
        exact : false,
        main : <IntroducePage />
    },
    {
        path : '/phong-gia',
        exact : false,
        main : <></>
    },
] 