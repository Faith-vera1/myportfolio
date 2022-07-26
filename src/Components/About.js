import React from "react";


const About = () => {

  

  return (
    <div>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-4"></div>
          </div>
        </div>

        <div className="col">
          <div className="w-50 m-auto">
            <h1 className="mb-0" >About Me</h1>
            <div className="border-top border-dark w-25 mt-0 border-5 mb-4" ></div>
            <h2>Full-Stack Web Developer</h2>
            <p className="mb-4">
              I am a full-stack web developer curently doing my internship in a web hosting 
              company in Lagos. I find interest in buiding impactful web applications,designing
              and hosting clients sites. I am Comfortable embracing new challenges, unforseen 
              responsibilities  and managing multiple  projects as team priorities realign. 
              I have built and implemented successful front and back-end web applications that 
              have become critical tools for clients and teams.
            </p>
            <br/>
            <p className="lead"> My inquisitiveness of how fascinating technology could make individuals, 
              organisations save time and fasten processes made me pivot into dev world.

            </p>
          </div>
          <div className="text-center w-50 m-auto bg-warning rounded-start">
          <ul className="techpro">
            <h2>My Technology Proficiencies</h2>
            <p>I have comfortable knowledge of the following skills;</p>
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>BOOTSTRAP</h1>
            <h1>GIT</h1>
            <h1>JavaScript</h1>
            <h1>REACT</h1>
            <h1>NODE.JS</h1>
            <h1>EXPRESS</h1>
            <h1>MONGODB</h1>
            <h1>NOSQL</h1>
          </ul>
          </div>

        </div> 
      </section>
    </div>
  );
};

export default About;
