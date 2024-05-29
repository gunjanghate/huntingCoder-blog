
"use client";
// import Image from 'next/image'
// import styles from './page.module.css'
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GrLogin } from "react-icons/gr";
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.replace("/home");
    return null;
  }

  return (
    <>
      <main className="main flex min-h-screen flex-col items-center justify-center p-0 overflow-scroll">
        <div className="log-container rounded-lg lg shadow-lg  shadow-slate-400 bg-slate-500 h-80 w-auto pr-10 pl-14">
          <div className="name-head-login pt-5 text-5xl  font-extrabold">
            huntingCoder
          </div>
          <h2 className="login-text text-2xl font-bold ml-32 mt-10 mb-20 flex gap-2 "><div className="login-img mt-1"><GrLogin /></div>Login</h2>
        <button
          onClick={() => {
            signIn("google");}}
           className="login-butnn p-1.5 flex rounded-3xl shadow-sm border-black border-x-4 border-y-4 hover:border-white hover:border-x-2 hover:border-y-2   transition-all hover:bg-white flex-row gap-3  text-2xl bg-slate-200 text-blue-950 ml-6">
          {" "}
          <FcGoogle /> <p className="login-butn-txt text-xl  font-bold">Continue with the google</p>{" "}
        </button>
          </div>
            <Link href="/pages/home" className=" hover:text-blue-400 mt-14 font-extrabold">⬅️ back to home</Link>
      </main>
    </>
  );
}
