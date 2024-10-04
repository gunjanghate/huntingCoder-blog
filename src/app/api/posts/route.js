// // const uri = process.env.MONGODB_URI;

// import { MongoClient } from 'mongodb';
// import { NextResponse } from 'next/server';

// let cachedClient = null;
// let cachedClientPromise = null;

// async function connectToDatabase() {
//   if (!cachedClientPromise) {
//     const client = new MongoClient("mongodb+srv://ghategunjan:gg1234@cluster0.2emmu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
//     cachedClientPromise = client.connect();
//     cachedClient = client;
//   }
//   return cachedClientPromise;
// }

// export async function GET() {
//   try {
//     const client = await connectToDatabase();
//     const database = client.db('huntingCoder');
//     const inventory = database.collection('posts');

//     const products = await inventory.find({}).toArray();

//     return NextResponse.json({ success: true, products });
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
//   }
// }

// // export async function POST(request) {
// //   try {
// //     const body = await request.json();
// //     const client = await connectToDatabase();

// //     const database = client.db('huntingCoder');
// //     const inventory = database.collection('posts');

// //     const result = await inventory.insertOne(body);

// //     return NextResponse.json({ result, ok: true, insertedId: result.insertedId });
// //   } catch (error) {
// //     console.error("Error adding product:", error);
// //     return NextResponse.json({ error: 'Failed to add product' }, { status: 500 });
// //   }
// // }
// export async function POST(request) {
//   try {
//     const body = await request.json();
//     console.log("Received body:", body); // Log the body to see what you're sending
//     const client = await connectToDatabase();

//     const database = client.db('huntingCoder');
//     const inventory = database.collection('posts');

//     const result = await inventory.insertOne(body);
//     console.log("Insert result:", result); // Log the result of the insert

//     return NextResponse.json({ result, ok: true, insertedId: result.insertedId });
//   } catch (error) {
//     console.error("Error adding product:", error);
//     return NextResponse.json({ error: 'Failed to add product' }, { status: 500 });
//   }
// }

import { Databases, ID, Query } from "appwrite";
import client from "../../../lib/appwrite_client";
import { NextResponse } from "next/server";

const database = new Databases(client);

async function createPosts(data) {
  try {
    const response = await database.createDocument(
      process.env.APPWRITE_DB,
      process.env.APPWRITE_COLLECTION,
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
    console.log('Database:', process.env.APPWRITE_DB);
    console.log('Collection:', process.env.APPWRITE_COLLECTION);
    
    const response = await database.listDocuments(
      process.env.APPWRITE_DB,
      process.env.APPWRITE_COLLECTION,
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

