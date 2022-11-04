import React from "react";

export default function Form() {

  return (
    <div className="pt-8 shadow-xl">
      <form className=" p-5 bg-white flex flex-col rounded-xl">
        <input
          type="text"
          placeholder="First Name"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold"
          name="firstemail"
          required
          id="inputs"
        />
        <p className="text-end text-red  text-xs pt-1">
          First Name cannot be empty
        </p>
        <i>
          <img
            src="\images\icon-error.svg"
            alt=""
            className=" translate-x-60 -translate-y-14"
          />
        </i>
        <input
          type="text"
          placeholder="Last Name"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold"
          name="lastname"
          required
        />
        <p className="text-end text-red  text-xs pt-1">
          Last Name cannot be empty
        </p>
        <i>
          <img
            src="\images\icon-error.svg"
            alt=""
            className=" translate-x-60 -translate-y-14"
          />
        </i>
        <input
          type="email"
          placeholder="Email address"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold"
          name="email"
          required
        />
        <p className="text-end text-red   text-xs pt-1">
          Looks like this is not an email
        </p>
        <i>
          <img
            src="\images\icon-error.svg"
            alt=""
            className=" translate-x-60 -translate-y-14"
          />
        </i>
        <input
          type="password"
          placeholder="Password"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold"
          name="password"
          required
        />
        <p className="text-end text-red  text-xs pt-1">
          Password cannot be empty
        </p>
        <i>
          <img
            src="\images\icon-error.svg"
            alt=""
            className=" translate-x-60 -translate-y-14"
          />
        </i>
        <button className="uppercase bg-green py-3 text-white tracking-widest rounded-lg shadow-inner" id="submit">
          Claim your free trial
        </button>
        <p className="text-center text-[11px] px-5 text-grayish-Blue leading-4">
          By clicking the button, you are agreeing to our
          <span className="text-red font-bold"> Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
