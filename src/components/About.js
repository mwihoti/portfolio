import React from 'react'

const About = () => {
return (

    <div
    name="about"
    id="about"
    className="w-full h-screen bg-[#0a192f] text-gray-300"
  >
   <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div> 
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Daniel Edward Mwihoti, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                A software developer with experience in building Responsive and
                Scalable Web apps.I am also proficient in React, one of the most popular JavaScript libraries for building user interfaces.
                I am familiar with Git commands, branching, and merging, and I am comfortable using GitHub to contribute to open source projects.
                I am also experienced with backend development using Node.js. I have used databases like MongoDB and MySQL to store and retrieve data.
                As someone interested in network essentials and cybersecurity, I have obtained CCNA certification, which has provided me with a deeper understanding of network fundamentals, protocols, and security. I have also learned about blockchain technology and am proficient in Solidity, a smart contract programming language.

Overall, I am a highly motivated and passionate developer with a broad range of skills in frontend and backend web development, version control, programming languages, and network essentials and cybersecurity. I am excited to leverage these skills to take on challenging projects and contribute to the tech industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


);

};

export default About;