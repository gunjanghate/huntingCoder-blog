import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="pre-main bg-slate-900 flex" id="header">
        <Image
          src="/img/coding-blog.jpg"
          width={800}
          height={500}
          alt="Picture of the coder hunting in code"
          className="bg-opacity-95 transition-all shadow-lg shadow-slate-500 rounded-md" />
        <div className="para-pre-main flex flex-col justify-center pl-14 pr-5 ">
          <p className="para-head pl-2  pt-10 text-4xl  font-extrabold transition-all">
            Welcome to huntingCoder Blog ✍🏻
          </p>
          <p className="para-text pl-4  pb-0 text-2xl font-extralight mt-10 text-left hover:font-light transition-all overflow-scroll">
            {" "}
            your go-to source for insightful blogs on tackling coding challenges
            and debugging issues. Dive into our articles to explore expert tips,
            solutions to common coding problems. Whether you&apos;re a beginner or an experienced
            developer, our content is designed to help you navigate the
            complexities of programming with confidence. Join our community of
            passionate coders and enhance your problem-solving skills today!
          </p>
        </div>
      </div>
      <main className="main flex h-svh flex-col items-center justify-around p-0 ">
        <div className="content-main-head-home pt-0 text-3xl pl-10 mt-16 mb-5 font-extrabold ">
          huntingCoder Hunts for Issues and bugs and Solution for the same!
        </div>

        <div className="content-main-home flex flex-row justify-evenly mb-32 ml-14 mr-14">
          <div className="blog-home mt-0 mr-10 mb-5 cursor-pointer hover:-translate-y-4 shadow-slate-400 shadow-lg hover:dark:bg-neutral-200 hover:text-slate-800 transition-all text-center overflow-y-scroll w-5/12 text-wrap h-96 pt-10">
            <div className="blog-item bg-transparent rounded-lg border-transparent pb-2 pl-3 pr-3 ">
              <p className="blg-txt text-2xl ">
                <span className="font-blog font-extrabold text-4xl ">❝</span> We
                want to build technology that everybody loves using, and that
                affects everyone. We want to create beautiful, intuitive
                services and technologies that are so incredibly useful that
                people use them twice a day. Like they use a toothbrush.{" "}
                <span className="font-blog font-extrabold text-3xl">❞</span>
              </p>
              <h2 className="font-blog mt-3 font-light flex relative left-80 text-xl">
                - Steve Jobs
              </h2>
            </div>
          </div>
          <div className="blog-home mt-0 mb-5 ml-5 mr-5 cursor-pointer hover:-translate-y-4 shadow-slate-400 shadow-lg hover:dark:bg-neutral-200 hover:text-slate-800 transition-all text-center overflow-y-scroll w-5/12 text-wrap h-96 pt-10">
            <div className="blog-item bg-transparent rounded-lg border-transparent pb-2 pl-3 pr-3 ">
              <p className="blg-txt text-2xl ">
                <span className="font-blog font-extrabold text-4xl ">❝</span> The
                problem is that at a lot of big companies, process becomes a
                substitute for thinking. You&apos;re encouraged to behave like a
                little gear in a complex machine. Frankly, it allows you to keep
                people who aren&apos;t that smart, who aren&apos;t that creative.{" "}
                <span className="font-blog font-extrabold text-3xl">❞</span>
              </p>
              <h2 className="font-blog mt-3 font-light flex relative left-80 text-xl">
                - Elon Musk
              </h2>
            </div>
          </div>
          <div className="blog-home mt-0 ml-10 mb-5 cursor-pointer hover:-translate-y-4 shadow-slate-400 shadow-lg hover:dark:bg-neutral-200 hover:text-slate-800 transition-all text-center overflow-y-scroll w-5/12 text-wrap h-96 pt-10">
            <div className="blog-item bg-transparent rounded-lg border-transparent pb-2 pl-3 pr-3 ">
              <p className="blg-txt text-xl ">
                <span className="font-blog font-extrabold text-4xl ">❝</span> There are so many famous people who had done fabulous work in
                the technology field. They also give numerous technology quotes
                which are inspiring and motivational. Here, we are giving some
                technology quotes to inspire you. You should follow these quotes
                if you want to do something interesting and creative in your
                life in this particular field of technology.{" "}
                <span className="font-blog font-extrabold text-3xl">❞</span>
              </p>
              <h2 className="font-blog font-light mt-3 flex relative left-80 text-xl">
                - Unknown
              </h2>
            </div>
          </div>
        </div>
        <div className="toBlog">
          <Link href="/pages/blogs" className="text-2xl font-bold">
            Go to blog page ➡
          </Link>
        </div>
      </main>
      <div className="post-main opacity-60 hover:opacity-75 transition-opacity"></div>
    </>
  );
}
