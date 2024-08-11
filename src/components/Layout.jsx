import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({page}) => {
    return (
        <>
        <header><Header /></header>
        <main> <Outlet /> </main> 
        <footer><Footer /></footer>
        </>
    )
}