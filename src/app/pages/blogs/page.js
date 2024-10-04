// "use client"
import Link from "next/link";
import { getPosts } from "@/lib/data";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogsPage from "@/components/Blogs/Blogs";

export const metadata = {
  title: "Blogs Page | huntingCoder",
  description: "Next.js huntingCoder Description"
};

const Blogs = async () => {
  const posts = await getPosts(); 

  return (
    <>
      <main className="main-blog-page flex justify-center flex-col items-center h-full p-0 ">
        <BlogsPage />
        {/* <AddPosts /> */}
        <Link href="/pages/addpost" className="text-xl text-white mt-12 mx-auto font-semibold flex gap-3 ">Add posts{" "}
        <span className="right-arr pt-1"><FaArrowRightLong /></span></Link>
      </main>
    </>
  );
};

export default Blogs;
