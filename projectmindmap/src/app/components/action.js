"use server";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
export const handleClickAdd = async function (sub) {
    const user_id = sub.replace("|", "-");
    const response = await fetch(`${process.env.SERVER_API}/project_mindmap`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: uuidv4(),
            name: "Không có tên",
            user_id: user_id,
            private: true,
            dataNodes: [
                {
                    id: "0",
                    position: {
                        x: 0,
                        y: 0,
                    },
                    data: {
                        label: "1",
                    },
                    type: "input",
                    deletable: false,
                },
            ],
            dataEdges: [],
        }),
    });

    if (response.ok) {
        revalidatePath("/(mindmap)/mindmapflow");
    }
};

export const handleClickRemove = async (id) => {
    const response = await fetch(
        `${process.env.SERVER_API}/project_mindmap/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (response.ok) {
        revalidatePath("/(mindmap)/mindmapflow");
    }
};

export const revalidate = () => {
    revalidatePath("/(mindmap)/mindmapflow");
};
