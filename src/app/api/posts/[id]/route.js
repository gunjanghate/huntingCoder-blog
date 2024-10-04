import { Databases } from "appwrite";
// import client from "../../../lib/appwrite_client";
// import { data } from "autoprefixer";
import client from "@/lib/appwrite_client";
import { NextResponse } from "next/server";

const database = new Databases(client);

async function fetchPosts(id) {
    try {
      const post = await database.getDocument(
        process.env.APPWRITE_DB,
        process.env.APPWRITE_COLLECTION,
        id
      );
      return post;
    } catch (e) {
      console.error("Error fetching post:", e.message);
      throw new Error("Failed to fetch posts");
    }
  }
  

async function detetePosts(id) {
  try {
    const resp = await database.deleteDocument(
      process.env.APPWRITE_DB,
      process.env.APPWRITE_COLLECTION,
      id
    );
    return resp;
  } catch (e) {
    console.error(e);
  }
}

async function updatePosts(id, data) {
  try {
    const resp = await database.updateDocument(
      process.env.APPWRITE_DB,
      process.env.APPWRITE_COLLECTION,
      id,
      data
    );
    return resp;
  } catch (e) {
    console.error(e);
  }
}

export async function GET(req, { params }) {
  try {
    const id = params.id;
    const posts = await fetchPosts(id);
    return NextResponse.json({ posts });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to fetch posts",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const id = params.id;
    await detetePosts(id);
    return NextResponse.json({ message: "Post Deleted" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to delete posts",
      },
      { status: 500 }
    );
  }
}


export async function PUT(req, { params }) {
  try {
    const id = params.id;
    const post = await req.json();
    await updatePosts(id, post);
    return NextResponse.json({ message: "Post Updated" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to update posts",
      },
      { status: 500 }
    );
  }
}