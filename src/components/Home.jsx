import React from 'react'
import Header from './Header';
import { BsEmojiHeartEyesFill, BsCodeSlash } from 'react-icons/bs'
const Home = () => {
  return (
    <div className='homeSection'>
        <Header/>
        <div className='Intro d-flex justify-content-center'>
          <p>I am</p>
          <div className="words pt-1">
                <span>Developer <BsEmojiHeartEyesFill fill='red'/></span>
                <span>Coder <BsCodeSlash fill='#fff'/></span>
                <span>Trainer</span>
                <span>Artist</span>
                <span>Developer</span>
              </div>
        </div>
        <div className='text-center mx-5 px-5'>
          <h3 className='opacity-75'>
          I am a self-taught coder and developer. Below are a few points that I think make me a viable employee for your organization. I'm proficient in C, C++, javascript, and python.  Also, I have worked on technologies like HTML, CSS, Javascript, Node.js, Bootstrap, Express.js, React, Flask, MySQL, MongoDB, Rethinkdb, WebSocket, and IoT.
Industry-level problem-solving skills to provide the best solutions. Always passionate about learning new things. Knowledge of Data Structure and Algorithms.
Currently, I am working as a Front-End development Intern at RMgX, Apart from this, I have worked as a full-stack developer at Matrix Nodes and I worked as an IoT research intern at codebugged AI, and currently, I am working as Certified Python Mentor at Codeyoung. I have industry-level experience and a team player spirit which helps me to absorb your working environment.
          </h3>
        </div>
    </div>
  )
}

export default Home