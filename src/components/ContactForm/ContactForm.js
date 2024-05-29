"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { RiContactsBook3Fill } from "react-icons/ri";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvoenyey");
  if (state.succeeded) {
    return <p className=" min-h-screen items-center text-slate-300 ml-24 mr-12 text-center  pt-12 " id="header"><span className=" text-4xl text-white font-extrabold">Thanks for contacting!</span></p>;
  }
  return (
    <main className=" min-h-screen items-center text-slate-300 " id="header">
        <div className="head-contact md:ml-96 ml-40 lg:ml-96 lg:pl-72 lg:mr-auto  font-extrabold text-white mt-8 text-3xl flex gap-2">Contact Me <div className="contact-img mt-1"> <RiContactsBook3Fill /></div></div>
      <div className="form md:ml-72 md:h-3/5 lg:ml-auto lg:mr-auto mt-20 ml-24 bg-transparent shadow-lg shadow-gray-500 w-96 h-3/6 pt-6 pl-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
          <label className="text-2xl " htmlFor="name">Full Name:</label>
          <input className="w-80 p-2 rounded-md focus:border-x-2 transition-all hover:bg-slate-300  text-xl font-bold focus:border-y-2 focus:border-black text-blue-950" placeholder="Full Name" id="name" type="text" name="name" />
          <label className="text-2xl " htmlFor="email">Email Address :</label>
          <input className="w-80 p-2 rounded-md focus:border-x-2 transition-all hover:bg-slate-300  text-xl font-bold focus:border-y-2 focus:border-black text-blue-950" placeholder="Email" id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label className="text-2xl " htmlFor="textarea">Feedback / Message :</label>
          <textarea className="w-80 p-2 rounded-md focus:border-x-2 transition-all hover:bg-slate-300 text-xl font-bold  focus:border-y-2 focus:border-black h-32 text-blue-950" placeholder="message..." id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button className="bg-green-500 mt-2 md:mt-8 text-white font-bold w-80 rounded-lg p-1 md:p-2 hover:bg-green-400 md:text-xl transition-all" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};
export default ContactForm;
