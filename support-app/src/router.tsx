import * as React from "react";
import {
  createBrowserRouter
  } from "react-router-dom";
import App from "./App";

const Page = (props: {title:string}) => <h1>{props.title}</h1>


export const router = createBrowserRouter([
    {
    path: "/",
    element: <App />
    },
    {
    path: "/home",
    element: <Page title="Home" />
    },
    {
    path: "/youtube",
    element: <Page title="YouTube" />
    },
    {
    path: "/gmail",
    element: <Page title="Gmail" />
    },
    {
    path: "/googleplay",
    element: <Page title="Google Play" />
    },
    {
    path: "/googlesearch",
    element: <Page title="Google Search" />
    },
    {
    path: "/googleadsense",
    element: <Page title="Google Adsense" />
    },
    {
    path: "/pixelphone",
    element: <Page title="Pixel Phone" />
    },
    {
    path: "/googlemaps",
    element: <Page title="Google Maps" />
    },
    {
    path: "/googlecloud",
    element: <Page title="Google Cloud" />
    },
    {
    path: "/googleads",
    element: <Page title="Google Ads" />
    },
    {
    path: "/googlephotos",
    element: <Page title="Google Photos" />
    },
    {
    path: "/families",
    element: <Page title="Google For Families" />
    },
    {
    path: "/googlefi",
    element: <Page title="Google Fi" />
    },
    {
    path: "/googlenest",
    element: <Page title="Google Nest" />
    },
    {
    path: "/googleplay",
    element: <Page title="Google Play" />
    },
    {
    path: "/googlestore",
    element: <Page title="Google Store" />
    },
    {
    path: "/googleads",
    element: <Page title="Google Ads" />
    },
    {
    path: "/googledrive",
    element: <Page title="Google Drive" />
    },
    {
    path: "/googleshopping",
    element: <Page title="Google Shopping" />
    },
    {
    path: "/accessibility",
    element: <Page title="Google Accessibility" />
    }










])