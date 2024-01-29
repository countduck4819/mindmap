"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// export async function generateMetadata({params}, parent) {

// }
function layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default layout;
