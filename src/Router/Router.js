// Router In Website
import AlbumPage from "../Layout/AlbumPage/AlbumPage";
import HomePage from "../Layout/HomePage/HomePage";
import IntroducePage from "../Layout/IntroducePage/IntroducePage";
import ListRoomPage from "../Layout/ListRoomPage/ListRoomPage";
import SaleListPage from "../Layout/SaleListPage/SaleListPage";
import ServiceListPage from "../Layout/ServiceListPage/ServiceListPage";

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
        main : <ListRoomPage />
    },
    {
        path : '/dich-vu-tien-ich',
        exact : false,
        main : <ServiceListPage />
    },
    {
        path : '/uu-dai',
        exact : false,
        main : <SaleListPage />
    },
    {
        path: '/thu-vien-anh',
        exact: false,
        main: <AlbumPage />
    },
    {
        path: '/tours',
        exact: false,
        main: <></>
    },
    {
        path: '/dat-phong',
        exact: false,
        main: <></>
    }
] 