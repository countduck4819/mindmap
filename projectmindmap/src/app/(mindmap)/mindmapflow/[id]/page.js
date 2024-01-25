import React from "react";
import MindmapAction from "@/app/components/MindmapAction";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
const getProject = async function (id) {
    const response = await fetch(
        `${process.env.SERVER_API}/project_mindmap/${id}`,
        {
            cache: "no-cache",
        }
    );

    return await response.json();
};
async function Mindmap({ params }) {
    const { id } = params;
    let check = true;
    const user = await getSession();
    const dataProject = await getProject(id);
    if (!user) {
        check = false;
        if (dataProject.private === true) {
            redirect("/not_found");
        } else {
            return <MindmapAction id={id} setSave={check} />;
        }
    }
    return <MindmapAction id={id} setSave={check} />;
}

export default Mindmap;
