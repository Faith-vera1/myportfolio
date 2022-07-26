import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="w-75 m-auto">
            <div className="col-12 text-center py-4 border-bottom border-dark "></div>
            <h1 className=" w-25 m-auto">Contact</h1>
            <div className="col-12 text-center mb-4 border-bottom border-dark "></div>
            <div className="w-25 m-auto">
              <div>
                {" "}
                <span className="me-1">
                  <AiOutlineMail />:
                </span>
                ikpantanfaith@gmail.com
              </div>
              <div>
                {" "}
                <span className="me-1">
                 <IoLocationSharp />:
                </span>
                Lagos, Nigeria
              </div>
              <div>
                {" "}
                <span className="me-1">
                  <AiFillPhone />:
                </span>
                +2348081608218
              </div>
              <div>
                {" "}
                <span className="me-1">
                  <AiFillGithub />:
                </span>
                github.com/Faith-vera1
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Contact;
