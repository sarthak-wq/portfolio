import React from "react";
import MyPhoto from '/assets/mypic.jpg';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={MyPhoto}
            alt="About Me"
            className="w-72 h-72 rounded-full object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
            I’m Sarthak Deshmukh, a Full-Stack Developer and AI enthusiast, currently pursuing my Master’s in Information Systems at Northeastern University. With over three years of experience at Accenture, I specialize in building software solutions with technologies like ASP.NET, React, and Microsoft Bot Framework. I’m passionate about using AI to solve real-world problems and improve user experiences. I’m always excited to learn and grow in the tech world.
            </p>
            <div className="mt-12 flex justify-between text-center">
              <div className="align-middle border-2 border-green-400 px-4 py-2 rounded-full">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  MERN STACK
                </h3>
              </div>
              <div className="align-middle border-2 border-green-400 px-4 py-2 rounded-full">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  AWS
                </h3>
              </div>
              <div className="align-middle border-2 border-green-400 px-4 py-2 rounded-full">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  AZURE DEVOPS
                </h3>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
            <div className="align-middle border-2 border-green-400 px-4 py-2 rounded-full">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  JAVA
                </h3>
              </div>
              <div className="align-middle border-2 border-green-400 px-4 py-2 rounded-full">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  PYTHON
                </h3>
              </div>
              <div className="align-middle border-2 border-green-400 px-4 py-2 rounded-full">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  .NET CORE
                </h3>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
            <div className="align-middle border-2 border-green-400 px-4 py-2 rounded-full">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  MONGO DB
                </h3>
              </div>
              <div className="align-middle border-2 border-green-400 px-4 py-2 rounded-full">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  ANGULAR JS
                </h3>
              </div>
              <div className="align-middle border-2 border-green-400 px-4 py-2 rounded-full">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  SQL SERVER
                </h3>
              </div>
            </div>
            <div className="mt-12 flexwrap justify-center justify-between text-center">
              <div>
                <h3 className="text-4xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p>Years Industry Experience</p>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
