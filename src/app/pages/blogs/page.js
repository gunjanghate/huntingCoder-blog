import Link from "next/link";
import { getPosts, getUser } from "@/lib/data";

//Fetch data with an API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   }); //refresh data after every one hour j
//   if (!res.ok) throw new Error("Something Went Wrong");

//   return res.json();
// };
 export const metadata = {
  title: "Blogs Page | huntingCoder",
  description: "Next.js huntingCoder Description"
 }
const blogs = async () => {
  // const posts = await getData();
  //Fetch without an API
  const posts = await getPosts();
    return (
    <>
      <main id="header" className="main-blog-page flex min-h-screen flex-col items-center  p-0 h-screen overflow-scroll">
        <div className="content-main-head pt-0 text-4xl pl-5 mt-16 mb-10 font-extrabold ">
          Have Look to our Latest Blogs here!
        </div>
        <div className="content-main flex flex-row  flex-wrap ml-32">
          {posts.map((post) => (
            <div
              className="blog mt-0  mb-10 mr-5 cursor-pointer hover:-translate-y-4   shadow-slate-400 shadow-lg hover:dark:bg-slate-400 hover:text-slate-900  transition-all text-center overflow-y-scroll w-80 text-wrap h-72 pt-10"
              key={post.id}
            >
              <div className="blog-item bg-transparent rounded-lg border-transparent pb-5 pl-3 pr-3 ">
                <h2 className="head-blog-size text-left mb-2 font-extrabold text-2xl ">
                  {post.title}
                </h2>
                <p className="text-left text-xl ">
                  {post.pre}
                  <Link href={`/pages/blogpost/${post.id}`}>
                    <span className="text-blue-500 hover:underline hover:border-dashed transition-all">
                      {" "}
                      view more...
                    </span>{" "}
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>


      </main>
    </>
  );
};

export default blogs;
