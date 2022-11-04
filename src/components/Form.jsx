import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }

    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }

  return (
    <div className="pt-8">
      <form
        className=" p-5 bg-white flex flex-col gap-4 rounded-xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="First Name"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold"
          name="firstemail"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold"
          name="lastname"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="email"
          placeholder="Email address"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-md py-3 border-grayish-Blue px-4 font-bold"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button className="uppercase bg-green py-3 text-white tracking-widest rounded-lg">Claim your free trial</button>
        <p className="text-center text-[11px] px-5 text-grayish-Blue leading-4">By clicking the button, you are agreeing to our<span className="text-red font-bold"> Terms and Services</span></p>
      </form>
    </div>
  );
}
