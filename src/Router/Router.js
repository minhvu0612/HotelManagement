// Router In Website

import HomePage from "../Layout/HomePage/HomePage";

export const router = [
    {
        path : '/',
        exact : false,
        main : <HomePage />
    },
    {
        path : '/gioi-thieu',
        exact : false,
        main : <>Con Cak</>
    },
    {
        path : '/phong-gia',
        exact : false,
        main : <></>
    },
] 