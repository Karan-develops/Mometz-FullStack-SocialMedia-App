"use server"

import prisma from "@/lib/prisma";
import { getDbUserID } from "./user.actions"
import { revalidatePath } from "next/cache";

export async function createPost( content:string, image:string ) {
  try {
    const userId = await getDbUserID();

    if(!userId){
        return;}

    const post = await prisma.post.create({
        data: {
            content,
            image,
            authorId: userId,
        },
    })
    revalidatePath("/");
    return {success:true, post};
  } catch (error) {
    console.error("Failed to create post:", error);
    return { success: false, error: "Failed to create post" };
  }
}