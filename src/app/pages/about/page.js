// 'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Page | huntingCoder",
  description: "Next.js huntingCoder Description",
};
const Hola = () => {
  return (
    <>
      <main
    
        className="main flex min-h-screen flex-col items-center text-center lg:pl-32 lg:pr-32 justify-between p-0 overflow-scroll"
      >
        <div className="block-1 flex flex-col justify-center"     id="header">
          <div className="left-b pt-24 pb-24 pl-24 md:pl-64 lg:hidden pr-12">
            <span className="font-extrabold text-5xl text-white ">
              huntingCoder
            </span>
          </div>
          <div className="right-b flex flex-col mt-5 gap-4">
            <div className="line-1 text-3xl pl-1 font-bold">
              About huntingCoder
            </div>
            <div className="para-1 pl-5 text-xl pr-5">
              Welcome to huntingCoder, your premier destination for cutting-edge
              insights and solutions in the dynamic world of web development.
              Our platform is dedicated to empowering developers, coders, and
              tech enthusiasts with comprehensive guides, technical analyses,
              and practical solutions to the most pressing issues and challenges
              in software development.
            </div>

            <div className="line-1 text-3xl pl-1 font-bold">Our Mission </div>
            <div className="para-1 text-xl pl-5 pr-5">
              At huntingCoder, our mission is to foster a thriving community
              where knowledge is shared, and innovation is celebrated. We strive
              to demystify complex coding problems, offering clear, actionable
              solutions that bridge the gap between theory and practice. Our
              goal is to make web development accessible and enjoyable for
              everyone, from beginners to seasoned professionals.
            </div>
          </div>
        </div>
        <div className="block-2 mt-12">
          <Image
            src="./img/about-img.avif"
            width={800}
            height={500}
            alt="Picture of the coder hunting in code"
            className="opacity-55 transition-all "
          />
        </div>
        <div className="block-3 flex flex-col gap-3">
          <div className="line-1 text-3xl pl-1 font-bold mt-5">
            What We Offer
          </div>

          <div className="line-1 text-2xl pl-1 font-bold">
            1. In-Depth Blog Posts:{" "}
          </div>
          <div className="para-1 text-xl pl-5 pr-5">
            Our blog features meticulously researched articles covering a wide
            range of topics including debugging techniques, performance
            optimization, security best practices, and emerging technologies.
            Each post is crafted to provide value, whether you are tackling a
            specific bug or looking to enhance your overall coding prowess.{" "}
          </div>
          <div className="line-1 text-2xl pl-1 font-bold">
            2. Expert Insights:{" "}
          </div>
          <div className="para-1 text-xl pl-5 pr-5">
            Our team comprises seasoned developers and industry experts who
            bring their wealth of experience to the table. We offer expert
            insights into the latest trends and developments in the tech world,
            ensuring you stay ahead of the curve.{" "}
          </div>
          <div className="line-1 text-2xl pl-1 font-bold">
            3. Comprehensive Tutorials:{" "}
          </div>
          <div className="para-1 text-xl pl-5 pr-5">
            We believe in the power of hands-on learning. Our step-by-step
            tutorials are designed to help you master new skills and
            technologies. From setting up your first Next.js project to
            implementing advanced features in React, we’ve got you covered.{" "}
          </div>

          <div className="line-1 text-2xl pl-1 font-bold">
            4. Problem-Solving Focus:{" "}
          </div>
          <div className="para-1 text-xl pl-5 pr-5">
            At HuntingCoder, we understand that real-world coding often involves
            troubleshooting and problem-solving. Our content is geared towards
            identifying common issues and providing robust, efficient solutions.
            Whether you’re dealing with hydration faults in React or optimizing
            server-side rendering in Next.js, we provide the guidance you need.{" "}
          </div>
          <div className="line-1 text-2xl pl-1 font-bold">
            5. Community Engagement:{" "}
          </div>
          <div className="para-1 text-xl pl-5 pr-5">
            Join a vibrant community of like-minded individuals who are
            passionate about coding. Engage in discussions, share your
            experiences, and learn from others. Our forums and comment sections
            are great places to connect and collaborate.{" "}
          </div>
        </div>
        <div className="block-4 mt-5">
          <div className="line-1 text-3xl pl-1 font-bold">Our Vision: </div>
          <div className="para-1 text-xl mt-2 pl-5 pr-5">
            We envision a world where developers can seamlessly navigate the
            challenges of web development with confidence and creativity.
            HuntingCoder aims to be the go-to resource for reliable, up-to-date
            information and support in the ever-evolving tech landscape.{" "}
          </div>
        </div>
        <div className="block-2 mt-12">
          <Image
            src="./img/about-1.avif"
            width={800}
            height={500}
            alt="Picture of the coder hunting in code"
            className="opacity-55 transition-all "
          />
        </div>
      </main>
    </>
  );
};

export default Hola;
