import React from "react";
import logo from "@/image/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import Header from "./Header";
import ButtonBack from "./ButtonBack";
import OptionUser from "./OptionUser";
async function HeaderSuccess() {
    const user = await getSession();
    if (!user) {
        return (
            // <header className="header-success">
            //     <div className="header-left">
            //         <Link href="/" className="come_back_home">
            //             <Image className="object-cover" src={logo} alt="logo" />
            //             <span className="font-logo">Mindmap</span>
            //         </Link>
            //     </div>

            //     <div className="header-right">
            //         <div className="content">
            //             <FontAwesomeIcon icon={faUser} />
            //         </div>

            //         <ThemeSwitch />
            //     </div>
            // </header>
            <Header />
        );
    }
    return (
        <header className="header-success">
            <div className="header-left">
                <Link href="/" className="come_back_home">
                    <Image className="object-cover" src={logo} alt="logo" />
                    <span className="font-logo">Mindmap</span>
                </Link>
                <ButtonBack></ButtonBack>
            </div>

            <div className="header-right">
                <OptionUser user={user.user} />

                <ThemeSwitch />
            </div>
        </header>
    );
}

export default HeaderSuccess;
