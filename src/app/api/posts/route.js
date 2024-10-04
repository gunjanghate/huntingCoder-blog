import { Databases, ID, Query } from "appwrite";
import client from "../../../lib/appwrite_client";
import { NextResponse } from "next/server";

const database = new Databases(client);

async function createPosts(data) {
  try {
    const response = await database.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DB,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION,
      ID.unique(),
      data
    );
    return response;
  } catch (e) {
    console.error("Error creating post:", e);
    throw new Error("Failed to create posts");
  }
}

async function ReadPosts() {
  try {
    console.log('Database:', process.env.NEXT_PUBLIC_APPWRITE_DB);
    console.log('Collection:', process.env.NEXT_PUBLIC_APPWRITE_COLLECTION);
    
    const response = await database.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DB,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION,
      [Query.orderDesc("$createdAt")]
    );
    
    return response.documents;
  } catch (e) {
    console.error("Error reading posts:", e);
    throw new Error("Failed to read posts");
  }
}

export async function POST(req) {
  try {
    const { title, author, description, image } = await req.json();
    const data = { title, author, description, image };
    await createPosts(data);
    return NextResponse.json({ message: "Post Created" });
  } catch (e) {
    console.error("Error in POST request:", e);
    return NextResponse.json(
      {
        error: "Failed to create post",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const posts = await ReadPosts();
    return NextResponse.json(posts);
  } catch (e) {
    console.error("Error in GET request:", e);
    return NextResponse.json(
      {
        error: "Failed to Read posts",
      },
      { status: 500 }
    );
  }
}

