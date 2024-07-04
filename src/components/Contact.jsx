import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/warkkdeb", userInfo);
      toast.success("Message sent successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl  mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-boldmb-4">Contact me</h1>
        <span>Please fill the form below to contact me</span>
        <div className="flex flex-col justify-center items-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-bold mb-4 ">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="rounded-lg shadow appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email address</label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="text"
                placeholder="Enter your email address"
                className="rounded-lg shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                name="message"
                type="text"
                placeholder="Enter your query"
                className="rounded-lg shadow appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
