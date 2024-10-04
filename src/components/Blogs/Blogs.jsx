"use client";
import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    console.log("Fetching...");
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch("/api/posts");
        if (!resp.ok) throw new Error("Failed to fetch posts");
        const data = await resp.json();
        setPosts(data.posts || data);
      } catch (error) {
        console.error(error);
        setError("Failed to load posts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    console.log("deleting");
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      setPosts((prevPosts) => prevPosts.filter((post) => post.$id !== id));
      setSuccessMessage("Deleted successfully!");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      setError("Failed to delete post, Please try again or contact the creator");
      console.log("couldn't delete");
    }
  };

  return (
    <div>
      {error && (
        <div className="error text-2xl text-white font-bold my-3 mx-auto">
          {error}
        </div>
      )}
      {isLoading ? (
        <div className="loading text-2xl text-white font-bold my-3 mx-auto">
          Please wait, Loading Posts...
        </div>
      ) : (
        <>
          <div className="content-main-head flex justify-center items-center pt-0 text-4xl mt-16 mb-10 font-extrabold">
            Have a Look at our Latest Blogs here!
          </div>
          {posts.length === 0 ? (
            <div className="no-posts-message text-xl text-white font-bold text-center my-5">
              No posts available.
            </div>
          ) : (
            <div className="content-main flex flex-row justify-center flex-wrap">
              {posts.map((post) => (
                <div key={post.$id} className="blog-item mb-5 mr-3 w-96 cursor-pointer">
                  <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300  hover:-translate-y-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-50"
                    />
                    <div className="blog-content p-3">
                      <h2 className="head-blog-size text-left mb-2 font-extrabold text-2xl text-white">
                        {post.title}
                      </h2>
                      <p className="text-left text-xl text-white">
                        {post.description}
                        {/* <Link href={`/pages/blogpost/${post.$id}`}>
                          <span className="text-blue-500 hover:underline hover:border-dashed transition-all">
                            {" "}view more...
                          </span>
                        </Link> */}
                      </p>
                      <p className="text-right">
                        ~{" "}by {post.author}
                      </p>
                    </div>
                  </div>
                  <div className="edit-deleteButn flex gap-3 mt-2">
                    <button>
                      <Link href={`/pages/update/${post.$id}`} className="text-2xl text-blue-600">
                        <FaRegEdit />
                      </Link>
                    </button>
                    <button onClick={() => handleDelete(post.$id)} className="text-3xl text-red-600">
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {successMessage && (
            <div className="fixed top-24 right-0 m-5 p-4 bg-red-500 text-white rounded-lg shadow-md text-xl font-semibold shadow-slate-400 transition-opacity duration-300">
              {successMessage}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Blogs;
