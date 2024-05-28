import React from "react";
import Image from "next/image";
import Link from "next/link";
import PostUser from "@/components/PostUser/PostUser";
import { getPosts, getUser, getPost } from "@/lib/data";

//Fetch Data with an API
// const getData = async (slug) => {
//   // const posts = await getData1();
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     const errorDetails = await res.text();
//     throw new Error(
//       `Error: ${res.status} - ${res.statusText} - ${errorDetails}`
//     );
//   }

//   return await res.json();
// };

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.pre,
  };
};

const blogposts = async ({ params }) => {
  const { slug } = params;
  //Fetch data with an API
  // const post = await getData(slug);

  //Fetch data without an API
  const post = await getPost(slug);
  if (!post) {
    return <div>Post not found</div>;
  }
  function createMarkup(b){
    return {__html: b};
  }
  return (
    <>
      <main id="header" className="main-blogpost  items-center text-center overflow-scroll">
        <h1 className="text-4xl font-extrabold mt-5 text-slate-300">
          Blog :- {post.id}
        </h1>
        <div className="post-main-blog flex flex-col justify-center">
          <div className="post-text flex flex-col justify-center pb-10 mr-16 ml-16 mt-10 mb-10 bg-slate-300 font-bold text-blue-950 rounded-2xl shadow-slate-400 shadow-lg">
            {/* <Image
              src="https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={750}
              height={100}
              className="shadow-slate-400 shadow-lg hover:dark:bg-neutral-200 hover:text-slate-800  transition-all"
            /> */}
            <div className="imgChangesHere mr-auto ml-auto mt-10 h-96 w-3/4 shadow-slate-400 shadow-lg hover:dark:bg-neutral-200 hover:text-slate-800  transition-all rounded-md"></div>

            <h2 className="blog-head-txt  text-4xl mt-5 font-extrabold">
              ✯ {post.title}
            </h2>
            {post && <PostUser userId={post.userId} />}
            {/* {console.log(post.userId)} */}
            
            <div dangerouslySetInnerHTML = {createMarkup(post.body)} className="blog-txt  text-xl text-slate-700 flex flex-col gap-10 font-bold pt-10 pl-10 pr-10 text-left"></div>
            <div className="linkstoprevfor flex gap-5 font-extrabold text-xl justify-center mt-14">
              <Link
                href="/pages/blogs"
                className=" hover:text-blue-600 font-extrabold"
              >
                {" "}
                ⬅️ back
              </Link>
              {/* <Link href={`/pages/blogpost/${post.id+1}`} className="hover:underline hover:text-blue-600 font-extrabold"> ➡️ <br /> to next blog</Link> */}
            </div>
          </div>
        </div>
      </main>
      {/* <div className="post-main"></div> */}
    </>
  );
};

export default blogposts;
