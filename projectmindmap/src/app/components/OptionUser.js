"use client";
import React, { memo } from "react";

// import {
//     Dropdown,
//     DropdownTrigger,
//     DropdownMenu,
//     DropdownItem,
//     Button,
// } from "@nextui-org/react";
function OptionUser({ user }) {
    function handleClick(e) {
        e.stopPropagation();
        e.preventDefault();
        const mode = document.querySelector(".user-option");
        async function removeHidden(e) {
            e.stopPropagation();
            const mode = document.querySelector(".user-option");
            await mode.querySelector("ul").classList.add("hidden");
            window.removeEventListener("click", removeHidden);
        }
        mode.querySelector("ul").classList.toggle("hidden");
        if (!mode.querySelector("ul").classList.contains("hidden")) {
            window.addEventListener("click", removeHidden);
        }
    }
    return (
        <>
            <div className="user-option">
                <div className="content" onClick={handleClick}>
                    <div className="name">{user.name}</div>
                    <div className="img">
                        <img
                            src={user.picture}
                            width="100%"
                            height="100%"
                            alt="user"
                        />
                    </div>
                </div>
                <ul className="option_user hidden">
                    <li>
                        <a href="/api/auth/logout">Logout</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default memo(OptionUser);
