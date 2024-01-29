"use client";
import { useRouter } from "next/navigation";
import React from "react";

function ButtonBack() {
    const route = useRouter();
    const handleClick = () => {
        route.back();
    };
    return (
        <button
            onClick={handleClick}
            className="px-5 py-3 text-[16px] rounded-lg items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 hover:bg-indigo-600/90 hidden md:block text-white dark:bg-[#5e43f3] dark:text-neutral-100"
        >
            Back
        </button>
    );
}

export default ButtonBack;
