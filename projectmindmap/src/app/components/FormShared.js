"use client";
import React, { useState } from "react";
import "@/assets/form.scss";
import { usePathname } from "next/navigation";
function FormShared({ dataPrivate, id, dataOrigin }) {
    const pathname = usePathname();
    const [linkShared, setLinkShared] = useState(
        `${process.env.NEXT_PUBLIC_HOST}${pathname}`
    );
    console.log(dataOrigin, dataOrigin.name);
    const [title, setTitle] = useState(dataOrigin.name);
    const [imageShared, setImageShared] = useState(dataOrigin.image);
    const [desc, setDesc] = useState(dataOrigin.desc);
    console.log(pathname);
    const [pri, setPrivate] = useState(dataPrivate);
    const handlePrivate = (e) => {
        // console.log(e.target);
        setPrivate(true);
    };
    const handlePublic = (e) => {
        // console.log(e.target);
        setPrivate(false);
    };

    const handleClickExit = (e) => {
        const formShared = document.querySelector("#form-shared");
        formShared.classList.add("hidden");
    };

    const handleSubmit = async function (e) {
        e.preventDefault();
        const form = document.querySelector(".form-shared form");
        if (pri === true) {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_API}/project_mindmap/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        private: pri,
                        public: null,
                        public_id: null,
                    }),
                }
            );
        } else {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_API}/project_mindmap/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        private: pri,
                        public: {
                            title,
                            imageShared,
                            desc,
                        },
                        public_id: linkShared.slice(
                            linkShared.lastIndexOf("/") + 1
                        ),
                    }),
                }
            );
        }
        const formShared = document.querySelector("#form-shared");
        formShared.classList.add("hidden");
    };
    return (
        <>
            <div className="form-shared hidden" id="form-shared">
                <div
                    className="shadow"
                    onClick={(e) => {
                        const formShared =
                            document.querySelector("#form-shared");
                        formShared.classList.add("hidden");
                    }}
                ></div>
                <div class="container rounded-lg">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="action flex justify-center gap-[35px] mb-[30px]">
                            <div
                                className="private"
                                id="private"
                                onClick={handlePrivate}
                            >
                                <input
                                    type="radio"
                                    id="private"
                                    name="private"
                                    value="true"
                                    checked={pri ? "checked" : ""}
                                />
                                <label
                                    className="text-[16px] ml-[10px]"
                                    htmlFor="private"
                                >
                                    Private
                                </label>
                            </div>
                            <div
                                className="public"
                                id="public"
                                onClick={handlePublic}
                            >
                                <input
                                    type="radio"
                                    name="private"
                                    id="public"
                                    value="false"
                                    checked={!pri ? "checked" : ""}
                                />
                                <label
                                    className="text-[16px] ml-[5px]"
                                    htmlFor="public"
                                >
                                    Public
                                </label>
                            </div>
                        </div>
                        {pri ? (
                            <>
                                <div className="infomation text-[16px] mb-[20px]">
                                    If you choose private, only you are allowed
                                    to view this Mindmap
                                </div>
                            </>
                        ) : (
                            <>
                                <div class="form-row">
                                    <div class="input-data">
                                        <input
                                            type="text"
                                            className="input"
                                            onChange={(e) =>
                                                setLinkShared(e.target.value)
                                            }
                                            value={linkShared}
                                        />
                                        <div class="underline"></div>
                                        <label for="">Link shared</label>
                                    </div>
                                    <div class="input-data">
                                        <input
                                            type="text"
                                            className="input"
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                            value={title}
                                        />
                                        <div class="underline"></div>
                                        <label for="">Title</label>
                                    </div>
                                    <div class="input-data">
                                        <input
                                            type="text"
                                            className="input"
                                            onChange={(e) =>
                                                setImageShared(e.target.value)
                                            }
                                            value={imageShared}
                                        />
                                        <div class="underline"></div>
                                        <label for="">Image shared</label>
                                    </div>
                                </div>

                                <div class="input-data textarea">
                                    <label for="">Description</label>
                                    <textarea
                                        className="pl-[12px]"
                                        rows="8"
                                        cols="80"
                                        onChange={(e) =>
                                            setDesc(e.target.value)
                                        }
                                        value={desc}
                                    ></textarea>
                                    <br />
                                    <br />
                                </div>
                            </>
                        )}

                        <div className="action-btn flex gap-[20px]">
                            <button className="w-[70px] border-[2px] border-solid border-green-600 rounded-lg px-3 py-2 text-green-400 text-[16px] cursor-pointer hover:bg-green-600 hover:text-green-200">
                                Submit
                            </button>
                            <div
                                onClick={handleClickExit}
                                className="border-[2px] pr-4 pl-4 border-solid border-red-600 rounded-lg px-3 py-2 text-red-400 text-[16px] cursor-pointer hover:bg-red-600 hover:text-red-200"
                            >
                                Exit
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormShared;
