import React from "react";
import MindmapAction from "@/app/components/MindmapAction";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
const getProject = async function (id) {
    const response = await fetch(
        `${process.env.SERVER_API}/project_mindmap${id}`,
        {
            cache: "no-cache",
        }
    );

    return await response.json();
};
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const user = await getSession();
    const { id } = params;
    console.log(id);
    if (!user) {
        let data = await getProject(`?public_id=${id}`);
        data = data[0];
        if (data?.private === false) {
            return {
                title: data.public.title,
                description: data.public.desc,
                openGraph: {
                    title: data.public.title,
                    description: data.public.desc,
                    images: [data.public.imageShared],
                },
            };
        }
    } else {
        const data = await getProject(`/${id}`);
        return {
            title: data.name,
            description: data.desc,
            openGraph: {
                title: data.name,
                description: data.desc,
                images: [data.image],
            },
        };
    }
}
async function Mindmap({ params }) {
    const { id } = params;
    let check = true;
    const user = await getSession();
    console.log(123);
    if (!user) {
        const dataProject = await getProject(`?public_id=${id}`);
        check = false;
        if (dataProject[0].private === false) {
            return <MindmapAction id={id} setSave={check} />;
        } else {
            // redirect("/not_found");
        }
    } else {
        console.log("???");
        const dataProject = await getProject(`/${id}`);
        if (
            dataProject.id &&
            user.user.sub.replace("|", "-") === dataProject.user_id
        ) {
            return <MindmapAction id={id} setSave={check} />;
        } else if (
            dataProject.id &&
            user.user.sub.replace("|", "-") !== dataProject.user_id
        ) {
            check = false;
            return <MindmapAction id={id} setSave={check} />;
        } else {
            const data = await getProject(`?public_id=${id}`);
            if (data[0]?.id) {
                check = false;
                return <MindmapAction id={id} setSave={check} />;
            } else {
                redirect("/not-found");
            }
        }
    }
}

export default Mindmap;
