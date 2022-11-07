import React from "react";

export default function Form() {
  const errorMsg = document.querySelector("#error-msg");
  const errorIcon = document.querySelector("#error-icon");
  const errorMsg2 = document.querySelector("#error-msg2");
  const errorIcon2 = document.querySelector("#error-icon2");
  const errorMsg3 = document.querySelector("#error-msg3");
  const errorIcon3 = document.querySelector("#error-icon3");
  const errorMsg4 = document.querySelector("#error-msg4");
  const errorIcon4 = document.querySelector("#error-icon4");
  const input = document.querySelector("#input");
  const input2 = document.querySelector("#input2");
  const input3 = document.querySelector("#input3");
  const input4 = document.querySelector("#input4");
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", () => {
    errorMsg.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
    errorMsg2.classList.remove("hidden");
    errorIcon2.classList.remove("hidden");
    errorMsg3.classList.remove("hidden");
    errorIcon3.classList.remove("hidden");
    errorMsg4.classList.remove("hidden");
    errorIcon4.classList.remove("hidden");
    input.classList.remove("mb-4");
    input2.classList.remove("mb-4");
    input3.classList.remove("mb-4");
    input4.classList.remove("mb-4");
  });

  return (
    <div className="pt-8 shadow-xl relative z-10">
      <form className=" p-5 bg-white flex flex-col rounded-xl">
        <input
          type="text"
          placeholder="First Name"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold mb-4"
          name="firstemail"
          id="input"
          required
        />
        <p className="text-end text-red  text-xs pt-1 hidden" id="error-msg2">
          First Name cannot be empty
        </p>
        <i>
          <img
            src="\images\icon-error.svg"
            alt=""
            id="error-icon2"
            className="translate-x-60 -translate-y-14 hidden md:translate-x-[500px]"
          />
        </i>
        <input
          type="text"
          placeholder="Last Name"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold mb-4"
          name="lastname"
          id="input2"
          required
        />
        <p className="text-end text-red  text-xs pt-1 hidden" id="error-msg">
          Last Name cannot be empty
        </p>
        <i>
          <img
            src="\images\icon-error.svg"
            alt=""
            id="error-icon"
            className=" translate-x-60 -translate-y-14 hidden md:translate-x-[500px]"
          />
        </i>
        <input
          type="email"
          placeholder="Email address"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold mb-4"
          name="email"
          id="input3"
          required
        />
        <p className="text-end text-red   text-xs pt-1 hidden" id="error-msg3">
          Looks like this is not an email
        </p>
        <i>
          <img
            src="\images\icon-error.svg"
            alt=""
            id="error-icon3"
            className=" translate-x-60 -translate-y-14 hidden md:translate-x-[500px]"
          />
        </i>
        <input
          type="password"
          placeholder="Password"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold mb-4"
          name="password"
          id="input4"
          required
        />
        <p className="text-end text-red  text-xs pt-1 hidden" id="error-msg4">
          Password cannot be empty
        </p>
        <i>
          <img
            src="\images\icon-error.svg"
            alt=""
            id="error-icon4"
            className=" translate-x-60 -translate-y-14 hidden md:translate-x-[500px]"
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
