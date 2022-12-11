import React from "react";
import Github from "../../assets/Icons/Github.png";
import LinkedIn from "../../assets/Icons/LinkedIn.png";
import Facebook from "../../assets/Icons/Facebook.png";

const ContactMe = () => {
  return (
    <div id="contactme" className="my-32">
      <h1 className="text-center text-5xl font-bold text-green-600">
        Contact Me
      </h1>
      <div className="flex justify-center">
        <form action="" className="my-10">
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered input-success w-96 my-3 mx-5"
          />
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered input-success w-96 my-3 mx-5"
          />{" "}
          <br />
          <textarea
            className="textarea textarea-success w-96 ml-5 my-3"
            placeholder="Enter your message"
          ></textarea>{" "}
          <br />
          <div className="flex justify-center">
            <button className="btn my-3" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center my-5">
        <a href="https://github.com/Fahim-2001" target="_blank">
          <img src={Github} alt="" width={"50px"} className="mx-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/md-yasir-omar-fahim-1633a0259/"
          target="_blank"
        >
          <img src={LinkedIn} alt="" width={"50px"} className="mx-5" />
        </a>
        <a
          href="https://www.facebook.com/yasiromarfahim.2001.bangladesh/"
          target="_blank"
        >
          <img src={Facebook} alt="" width={"50px"} className="mx-5" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
