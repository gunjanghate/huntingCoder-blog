"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

import { metadata } from "./metadata";
import AuthProvider from "../../components/AuthProvider";
import { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, session }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmIn, setIsAdmIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
    setIsAdmIn(!isAdmIn);
  };
  // const session = true;
  // const isAdmin = true;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <AuthProvider session={session}>
          <nav className="nav flex justify-between sticky w-screen top-0 bg-transparent bg-gray-900 shadow-slate-400 transition-all shadow-lg backdrop-blur-2xl">
            <Link
              href="/"
              className="name-head pt-5 text-3xl pl-5 font-extrabold"
            >
              huntingCoder
            </Link>
            <ul className="list flex items-center pt-5 pb-5 text-2xl">
              <li className="list-none cursor-pointer ml-8 pr-1 hover:underline transition-all text-slate-300 hover:text-white ">
                <Link href="/pages/home">Home</Link>
              </li>
              <li className="list-none cursor-pointer ml-8 hover:underline transition-all text-slate-300 hover:text-white ">
                <Link href="/pages/blogs">Blog</Link>
              </li>
              <li className="list-none cursor-pointer ml-8 hover:underline transition-all text-slate-300 hover:text-white ">
                <Link href="/pages/about">About</Link>
              </li>
              <li className="list-none cursor-pointer ml-8 hover:underline transition-all mr-20 text-slate-300 hover:text-white ">
                <Link href="/pages/contact">Contact</Link>
              </li>
              <div className="log-admin flex items-center">
                {/* <li className="list-none pl-8 mr-3 text-white font-bold hover:font-extrabold ">
                  <span className="bg-slate-400 p-3 rounded-xl transition-colors">
                    {isLoggedIn && isAdmIn ? "User" : "Guest"}
                  </span>
                </li>
                <li className="list-none cursor-pointer ml-3 mr-14   font-bold ">
                  <span className="bg-slate-600 p-3 rounded-xl hover:bg-white transition-colors hover:text-black hover:shadow-md   font-bold hover:font-extrabold">
                    <Link
                      href={isLoggedIn ? "/" : "/pages/login"}
                      onClick={handleClick}
                    >
                      {isLoggedIn ? "Logout" : "Login"}
                    </Link>
                    {/* <Link href="/pages/login" onClick={handleClick}>
                      {isLoggedIn ? "Logout" : "Login"}
                    </Link> */}
                  {/* </span> */}
                {/* </li> */}
                <div className="hamburger">
                  <button
                    onClick={toggleMenu}
                    className="menu transition-all ease-in-out"
                  >
                    <div className="l1 h-3 w-10">
                      <hr />
                    </div>
                    <div className="l2 h-3 w-10">
                      <hr />
                    </div>
                    <div className="l3 h-3 w-10">
                      <hr />
                    </div>
                  </button>
                  {isOpen && (
                    <ul className="ham-list bg-gray-900 p-5 rounded-2xl shadow-md shadow-slate-400 mt-5">
                      <li className="list-none-ham mb-3 cursor-pointer hover:underline transition-all text-slate-300 hover:text-white font-extrabold">
                        <Link href="/pages/home">Home</Link>
                      </li>
                      <li className="list-none-ham mb-3 cursor-pointer hover:underline transition-all text-slate-300 hover:text-white font-extrabold">
                        <Link href="/pages/blogs">Blog</Link>
                      </li>
                      <li className="list-none-ham mb-3 cursor-pointer hover:underline transition-all text-slate-300 hover:text-white font-extrabold">
                        <Link href="/pages/about">About</Link>
                      </li>
                      <li className="list-none-ham  mb-3 cursor-pointer hover:underline transition-all text-slate-300 hover:text-white font-extrabold">
                        <Link href="/pages/contact">Contact</Link>
                      </li>
                      <div className="log-admin flex justify-center flex-col">
                        <li className="list-none-ham ml-28 mt-20 mb-2 text-white font-bold hover:font-extrabold">
                          <span className="bg-slate-400 p-3 rounded-xl transition-colors">
                            {isLoggedIn && isAdmIn ? "User" : "Guest"}
                          </span>
                        </li>
                        <li className="list-none-ham-log ml-28 mb-10 cursor-pointer mt-8 text-slate-300 hover:text-white font-bold hover:font-extrabold">
                          <span className="bg-slate-600 p-3 rounded-xl hover:bg-slate-400 transition-colors">
                            <Link
                              href={isLoggedIn ? "/" : "/pages/login"}
                              onClick={handleClick}
                            >
                              {isLoggedIn ? "Logout" : "Login"}
                            </Link>
                          </span>
                        </li>
                      </div>
                    </ul>
                  )}
                </div>
              </div>
            </ul>
          </nav>
          {children}
          <div className="up flex w-10 sticky bottom-12 left-full bg-transparent text-white hover:bg-slate-400 hover:text-black font-extrabold rounded-lg transition-color  pl-4 pr-2 pt-2 pb-2">
            <a href="#header" className=" font-extrabold">
              ↑
            </a>
          </div>
          <footer className="footer min-h-10  flex flex-col justify-between  w-full bottom-0 bg-transparent">
            <div className="pre-footer flex flex-row justify-evenly pt-16">
              <div className="left-pre-foot mr-20 ">
                <div className="text-1 pl-5 pr-5 border-solid border-y-white">
                  <div className="up-home text-2xl font-bold">
                    <Link href="/pages/home" className="text-2xl font-bold">
                      Home
                    </Link>
                  </div>
                  <div className="down-home text-xl mt-2 font-light">
                    to homepage
                  </div>
                </div>
                <div className="text-2 mt-12 pl-5 pr-5 border-solid border-y-white">
                  <div className="up-blog">
                    {" "}
                    <Link href="/pages/blogs" className="text-2xl font-bold">
                      Blog
                    </Link>
                  </div>
                  <div className="down-blog text-xl mt-2 font-light">
                    Reach out to our latest blogs
                  </div>
                </div>
                <div className="text-3 mt-12 pl-5 pr-5 border-solid border-y-white">
                  <div className="up-about">
                    <Link href="/pages/about" className="text-2xl font-bold">
                      About
                    </Link>
                  </div>
                  <div className="down-contact text-xl mt-2 font-light">
                    get to know about huntingCoder
                  </div>
                </div>
                <div className="text-3 mt-12 pl-5 pr-5 border-solid border-y-white">
                  <div className="up-contact">
                    <Link href="/pages/contact" className="text-2xl font-bold">
                      Contact
                    </Link>
                  </div>
                  <div className="down-contact text-xl mt-2 font-light">
                    Contact us for any queries/feedback
                  </div>
                </div>
              </div>
              <div className="social pl-14 pr-5 border-solid border-y-white">
                <span>
                  <Link
                    href="#header"
                    className="pt-5 text-4xl pl-5 font-extrabold"
                  >
                    {" "}
                    huntingCoder
                  </Link>
                </span>
                <p className="text-2xl mt-8 text-wrap pl-5">
                  Welcome to huntingCoder – where every bug has a solution, and
                  every coder is a hunter for knowledge. Let’s code, learn, and
                  grow together.
                </p>
                <p className="text-xl mt-12 text-wrap pl-5">+91 8983885899</p>
                <p className=" mt-12 text-wrap pl-5 flex ">
                  {" "}
                  <a href="https://www.linkedin.com/in/gunjan-ghate-6506b5288/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 48 48"
                      className="mt-.5"
                    >
                      <path
                        fill="#0288D1"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                      ></path>
                    </svg>
                  </a>{" "}
                  <a href="https://github.com/gunjanghate">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 48 48"
                      className="ml-2"
                    >
                      <linearGradient
                        id="rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1"
                        x1="4"
                        x2="44"
                        y1="23.508"
                        y2="23.508"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#4c4c4c"></stop>
                        <stop offset="1" stop-color="#343434"></stop>
                      </linearGradient>
                      <path
                        fill="url(#rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1)"
                        d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"
                      ></path>
                      <path
                        d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M30.781,42.797c-0.406,0.047-1.281-0.109-1.281-0.795v-5.804c0-1.094-0.328-2.151-0.936-3.052	c5.915-0.957,8.679-4.093,8.679-9.812c0-2.237-0.686-4.194-2.039-5.822c0.137-0.365,0.233-0.75,0.288-1.147	c0.175-1.276-0.016-2.086-0.184-2.801l-0.027-0.116c-0.178-0.761-0.388-1.297-0.397-1.319l-0.111-0.282l-0.303-0.032	c0,0-0.178-0.019-0.449-0.019c-0.381,0-0.944,0.037-1.466,0.215l-0.196,0.066c-0.714,0.241-1.389,0.468-2.321,1.024	c-0.332,0.198-0.702,0.431-1.101,0.694C27.404,13.394,25.745,13.19,24,13.19c-1.762,0-3.435,0.205-4.979,0.61	c-0.403-0.265-0.775-0.499-1.109-0.699c-0.932-0.556-1.607-0.784-2.321-1.024l-0.196-0.066c-0.521-0.177-1.085-0.215-1.466-0.215	c-0.271,0-0.449,0.019-0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022-0.219,0.558-0.397,1.319l-0.027,0.116	c-0.169,0.715-0.36,1.524-0.184,2.8c0.056,0.407,0.156,0.801,0.298,1.174c-1.327,1.62-1.999,3.567-1.999,5.795	c0,5.703,2.766,8.838,8.686,9.806c-0.395,0.59-0.671,1.255-0.813,1.964c-0.33,0.13-0.629,0.216-0.891,0.256	c-0.263,0.04-0.537,0.06-0.814,0.06c-0.69,0-1.353-0.129-1.69-0.329c-0.44-0.261-1.057-0.914-1.572-1.665	c-0.35-0.51-1.047-1.417-1.788-1.755c-0.635-0.29-1.298-0.457-1.821-0.457c-0.11,0-0.21,0.008-0.298,0.022	c-0.366,0.058-0.668,0.252-0.828,0.534c-0.128,0.224-0.149,0.483-0.059,0.708c0.179,0.448,0.842,0.85,1.119,1.002	c0.335,0.184,0.919,0.744,1.254,1.284c0.251,0.404,0.37,0.697,0.521,1.067c0.085,0.209,0.178,0.437,0.304,0.712	c0.331,0.719,1.353,1.472,1.905,1.803c0.754,0.452,2.154,0.578,2.922,0.612l0.111,0.002c0.299,0,0.8-0.045,1.495-0.135v3.177	c0,0.779-0.991,0.81-1.234,0.81c-0.031,0,0.503,0.184,0.503,0.184C19.731,43.64,21.822,44,24,44c2.178,0,4.269-0.36,6.231-1.003	C30.231,42.997,30.812,42.793,30.781,42.797z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z"
                      ></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/gg._gunjann_/?hl=en">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="70"
                      height="60"
                      viewBox="0 0 100 100"
                      className="pb-1 "
                    >
                      <path
                        fill="#4e5fd8"
                        d="M82,31v38c0,2.01-0.46,3.92-1.27,5.62c-1.12,2.33-2.92,4.29-5.15,5.58C73.65,81.35,71.4,82,69,82H31 c-1.47,0-2.89-0.25-4.21-0.7h-0.01c-2.43-0.83-4.52-2.35-6.05-4.34C19.02,74.76,18,72,18,69V31c0-0.59,0.04-1.17,0.12-1.74 c0.1-0.77,0.27-1.52,0.51-2.24C20.3,21.79,25.21,18,31,18h38c0.43,0,0.85,0.02,1.26,0.06h0.03c0.77,0.08,1.51,0.22,2.23,0.43 c4.7,1.32,8.33,5.21,9.24,10.07c0.09,0.45,0.15,0.91,0.19,1.38C81.99,30.29,82,30.64,82,31z"
                      ></path>
                      <path
                        fill="#7550cc"
                        d="M81.76,28.56c-0.91-4.86-4.54-8.75-9.24-10.07c-0.74-0.16-1.48-0.3-2.23-0.43h-0.03 c-0.13-0.023-0.262-0.038-0.391-0.06H46.1c-10.24,1.72-19.73,5.64-27.98,11.26C18.04,29.83,18,30.41,18,31v38 c0,3,1.02,5.76,2.73,7.96c1.53,1.99,3.62,3.51,6.05,4.34h0.01C28.11,81.75,29.53,82,31,82h38c2.4,0,4.65-0.65,6.58-1.8 c2.23-1.29,4.03-3.25,5.15-5.58C81.54,72.92,82,71.01,82,69V31c0-0.36-0.01-0.71-0.05-1.06C81.91,29.47,81.85,29.01,81.76,28.56z"
                      ></path>
                      <path
                        fill="#9c32c8"
                        d="M82,31v38c0,2.01-0.46,3.92-1.27,5.62c-1.12,2.33-2.92,4.29-5.15,5.58C73.65,81.35,71.4,82,69,82H31 c-1.47,0-2.89-0.25-4.21-0.7h-0.01c-2.43-0.83-4.52-2.35-6.05-4.34C19.02,74.76,18,72,18,69V38.03C28.95,29.25,42.86,24,58,24 c8.4,0,16.42,1.62,23.76,4.56c0.09,0.45,0.15,0.91,0.19,1.38C81.99,30.29,82,30.64,82,31z"
                      ></path>
                      <path
                        fill="#d515a3"
                        d="M82,36.29V69c0,2.01-0.46,3.92-1.27,5.62c-1.12,2.33-2.92,4.29-5.15,5.58C73.65,81.35,71.4,82,69,82 H31c-1.47,0-2.89-0.25-4.21-0.7h-0.01c-2.43-0.83-4.52-2.35-6.05-4.34C19.02,74.76,18,72,18,69V47.41C28.28,37.26,42.41,31,58,31 C66.57,31,74.71,32.89,82,36.29z"
                      ></path>
                      <path
                        fill="#ec007a"
                        d="M82,44.14V69c0,2.01-0.46,3.92-1.27,5.62c-1.12,2.33-2.92,4.29-5.15,5.58C73.65,81.35,71.4,82,69,82 H31c-1.47,0-2.89-0.25-4.21-0.7h-0.01c-2.43-0.83-4.52-2.35-6.05-4.34C19.02,74.76,18,72,18,69V58.01C27.12,45.86,41.64,38,58,38 C66.69,38,74.87,40.22,82,44.14z"
                      ></path>
                      <path
                        fill="#ff492e"
                        d="M82,66.07V69c0,3-1.02,5.76-2.73,7.96c-1.53,1.99-3.62,3.51-6.05,4.34h-0.01 C71.89,81.75,70.47,82,69,82H31c-2.4,0-4.65-0.65-6.58-1.8c-2.23-1.29-4.03-3.25-5.15-5.58C18.46,72.92,18,71.01,18,69V54.54 C25.38,48.57,34.77,45,45,45C60.74,45,74.5,53.45,82,66.07z"
                      ></path>
                      <path
                        fill="#ff7a02"
                        d="M79.27,76.96c-1.53,1.99-3.62,3.51-6.05,4.34h-0.01C71.89,81.75,70.47,82,69,82H31 c-2.4,0-4.65-0.65-6.58-1.8c-2.23-1.29-4.03-3.25-5.15-5.58C18.46,72.92,18,71.01,18,69v-4.81C24.6,56.72,34.25,52,45,52 C61.03,52,74.61,62.48,79.27,76.96z"
                      ></path>
                      <path
                        fill="#ffa823"
                        d="M73.21,81.3C71.89,81.75,70.47,82,69,82H31c-2.4,0-4.65-0.65-6.58-1.8 c-2.23-1.29-4.03-3.25-5.15-5.58C24.1,65.34,33.81,59,45,59C58.71,59,70.2,68.51,73.21,81.3z"
                      ></path>
                      <path
                        fill="#ffca58"
                        d="M66.17,82H31c-2.4,0-4.65-0.65-6.58-1.8C27.57,71.9,35.6,66,45,66C55.07,66,63.56,72.77,66.17,82z"
                      ></path>
                      <path
                        fill="#ffdb73"
                        d="M58.75,82h-27.5c2.32-5.3,7.6-9,13.75-9S56.43,76.7,58.75,82z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M60,26.5H40c-7.444,0-13.5,6.056-13.5,13.5v20c0,7.444,6.056,13.5,13.5,13.5h20 c7.444,0,13.5-6.056,13.5-13.5V40C73.5,32.556,67.444,26.5,60,26.5z M69.5,60c0,5.238-4.262,9.5-9.5,9.5H40 c-5.238,0-9.5-4.262-9.5-9.5V40c0-5.238,4.262-9.5,9.5-9.5h20c5.238,0,9.5,4.262,9.5,9.5V60z M50,61.5 c-6.341,0-11.5-5.159-11.5-11.5S43.659,38.5,50,38.5S61.5,43.659,61.5,50S56.341,61.5,50,61.5z M50,42.5 c-4.136,0-7.5,3.365-7.5,7.5s3.364,7.5,7.5,7.5s7.5-3.365,7.5-7.5S54.136,42.5,50,42.5z M65.5,37.5c0,1.657-1.343,3-3,3 s-3-1.343-3-3s1.343-3,3-3S65.5,35.843,65.5,37.5z"
                      ></path>
                      <path
                        fill="#1f212b"
                        d="M60,74H40c-7.72,0-14-6.28-14-14V40c0-7.72,6.28-14,14-14h20c7.72,0,14,6.28,14,14v20	C74,67.72,67.72,74,60,74z M40,27c-7.168,0-13,5.832-13,13v20c0,7.168,5.832,13,13,13h20c7.168,0,13-5.832,13-13V40	c0-7.168-5.832-13-13-13H40z M60,70H40c-5.514,0-10-4.486-10-10V40c0-5.514,4.486-10,10-10h20c5.514,0,10,4.486,10,10v20	C70,65.514,65.514,70,60,70z M40,31c-4.963,0-9,4.037-9,9v20c0,4.963,4.037,9,9,9h20c4.963,0,9-4.037,9-9V40c0-4.963-4.037-9-9-9H40	z M50,62c-6.617,0-12-5.383-12-12s5.383-12,12-12s12,5.383,12,12S56.617,62,50,62z M50,39c-6.065,0-11,4.935-11,11s4.935,11,11,11	s11-4.935,11-11S56.065,39,50,39z M50,58c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S54.411,58,50,58z M50,43	c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S53.859,43,50,43z M62.5,41c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5	s3.5,1.57,3.5,3.5S64.43,41,62.5,41z M62.5,35c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5S63.879,35,62.5,35z M69,83H31c-7.72,0-14-6.28-14-14V31c0-7.72,6.28-14,14-14h38c7.72,0,14,6.28,14,14v38C83,76.72,76.72,83,69,83z M31,19	c-6.617,0-12,5.383-12,12v38c0,6.617,5.383,12,12,12h38c6.617,0,12-5.383,12-12V31c0-6.617-5.383-12-12-12H31z"
                      ></path>
                    </svg>
                  </a>
                </p>
                <p className="text-2xl mt-12 text-wrap pl-5"></p>
              </div>
            </div>{" "}
            <div className="post-footer flex justify-between sticky bottom-0">
              © Copyright 2024 | GG ~All Rights Reserved
              <div className="footer-head ">
                <p className="text-xl  font-bold">huntingCoder</p>
              </div>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
