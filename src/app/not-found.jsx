import React from "react";
import Link from "next/link";
const notfound = () => {
  return (
    <div>
      {" "}
      <main className="flex min-h-60 flex-col items-center text-3xl font-extrabold justify-center p-0 h-screen overflow-scroll">
        <h2>Not Found!</h2>
        <p>Sorry! the page you are looking for doesn't exists.</p>
        <p className="hover:text-blue-200 mt-12">
          <Link href="/">Return to homepage!</Link>
        </p>
      </main>
    </div>
  );
};

export default notfound;
