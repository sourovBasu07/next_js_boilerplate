"use server";

import { getErrorMessage } from "@/utils";
import { revalidatePath } from "next/cache";

// Usage example: 
// <form actions={createPost}></form>

export const createPost = async ({ title, description, path }) => {
    try {
        await connectToDb();
        // const res = await ......... 
        const data = JSON.parse(JSON.stringify(res));

        revalidatePath(path); // To revalidate any path after creating post

        return data;
    } catch (error) {
        getErrorMessage(error);
    }
};
