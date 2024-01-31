"use server";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
export const handleClickAdd = async function (sub) {
    const d = new Date();
    const user_id = sub.replace("|", "-");
    const response = await fetch(`${process.env.SERVER_API}/project_mindmap`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: uuidv4(),
            name: "Không có tên",
            created_at: `${d.getDate()}/${
                d.getMonth() + 1
            }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
            user_id: user_id,
            private: true,
            public_id: null,
            desc: "Powerful & Easy To Use — Your Ideas Deserve A Beautiful Online Mind Map Canvas. Start For Free. Upgrade Anytime. ",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Elements_of_the_culture_mindmap.png",
            public: null,
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
