import { Client } from "appwrite";

const client = new Client();

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_ID;

if (!endpoint || !projectId) {
  throw new Error("Missing Appwrite endpoint or project ID. Please set NEXT_PUBLIC_APPWRITE_ENDPOINT and NEXT_PUBLIC_APPWRITE_ID in your environment variables.");
}

client
  .setEndpoint(endpoint)
  .setProject(projectId);

export default client;
