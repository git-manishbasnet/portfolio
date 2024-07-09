import React from 'react'

export const About = () => {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
    <div>
    <h1 className='text-3xl font-bold mb-5'>About</h1>
    <p>I am a dedicated and passionate software developer with a strong foundation in computer science and hands-on experience in full stack web development. My goal is to create efficient, scalable, and user-friendly applications that make a difference in people's lives. I am always eager to learn new technologies and improve my skills.</p>
   <br />
   <h1 className='text-green-500 font-semibold text-xl'>Education & Training</h1>
<span>
<ul>
            <li>Bachelor in Computer Engineering,IOE Purwanchal Campus, Dharan</li>
            <li>Full Stack Web Development Bootcamp, Code for Change</li>
          </ul>
</span>
<br />
<p>During my time at Purwanchal Campus, I gained a solid understanding of computer science principles and developed my problem-solving skills. The Full Stack Web Development Bootcamp organized by ACES equipped me with practical knowledge and experience in building modern web applications.</p>
<br />
<h1 className='text-green-500 font-semibold text-xl'>Skills</h1>
<span>
  <ul>

<li>JavaScript, React</li>
            <li>HTML, CSS</li>
            <li>Express.js, Node.js</li>
            <li>MongoDB</li>
            <li>Git, GitHub</li>
  </ul> 
</span>
<br />
<p>
          My technical skills encompass a wide range of modern web development technologies. I am proficient in both front-end and back-end development, allowing me to build comprehensive and efficient web applications. My experience with version control systems and continuous integration ensures smooth project workflows.
        </p>
<br />
<h1 className='text-green-500 font-semibold text-xl'>Professional Experience</h1>
<span>
  <ul>
    <li>Software Developer Intern, XYZ Company</li>
    <li>Frontend Developer, ABC Startup</li>
  </ul>
  </span>
<br />
<h1 className='text-green-500 font-semibold text-xl'>Mission</h1>
<p>
          My mission is to leverage my technical skills and creativity to develop innovative solutions that solve real-world problems. I aim to contribute to projects that have a positive impact on society and continually grow as a professional in the ever-evolving field of web development.
        </p>
        <br />
        <h1 className='text-green-500 font-semibold text-xl'>Download My CV</h1>
        <p>
          You can download my CV to learn more about my professional journey and skills.
        </p>
        <a 
          href="./././public/mycv.pdf" 
          download 
          className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded mt-2 hover:bg-green-600"
        >
          Download CV
        </a>

    </div>

    </div>
  )
}
