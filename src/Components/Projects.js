import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4 mb-5">
            <h1>Here are My Most Recent Projects</h1>

            <hr />
            <p className="lead text-center">
              My problem-solving skills inspired me to clone impactful websites
              such as commerce site and crypto site. I applied several front-end skills such as
              react,API and other react dependencies  to achieve a user friendly site for 
              commercial companies.
            </p>
            <div class="mt-5 d-grid align-items-center justify-content-center">
              <a
                href="http://cryptoverse-faith.vercel.app"
                target="_blank"
                className="btn btn-danger btn-lg w-100 btn-size mb-1"
                rel="_noreferrer"
              >
                View project 1
              </a>

              <a
                href="http://faithcommercesite.vercel.app"
                target="_blank"
                className="btn btn-danger btn-lg w-100 btn-size mb-1"
                rel="_noreferrer"
              >
                View project 2
              </a>
              

              {/* <a
                href=""
                target="_blank"
                className="btn btn-danger btn-lg w-100 btn-size"
                rel="_noreferrer"
              >
                View project 3
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
