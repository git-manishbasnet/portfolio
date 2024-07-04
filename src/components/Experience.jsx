import React from 'react'
import cpp from '../../public/c++Logo.png'
import reactlogo from '../../public/reactLogo.png'
import jslogo from '../../public/JsLogo.png'
import clogo from '../../public/CLogo.png'
import html from '../../public/html.webp'
import css from '../../public/css.png'
export const Experience = () => {
    const cardItems=[
        {
          id:1,
          logo:cpp,
          name:"C++"
        },
        {
          id:2,
          logo:jslogo,
          name:"JavaScript"
        },
        {
          id:3,
          logo:reactlogo,
          name:"React"
        },
        {
          id:4,
          logo:clogo,
          name:"C"
        },
        {
            id:5,
            logo:html,
            name:"HTML"
        },
        {
            id:6,
            logo:css,
            name:"CSS"
        }
        
      ]
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
    <div>

    <h1 className='text-3xl font-bold mb-5'>Experience</h1>
    <p
    className=''>I have more than 2 years of experience in below technologies.
        </p>
    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
        {
            cardItems.map(({logo,name,id})=>(
                <div key={id} className='flex flex-col items-center justify center border-[2px] rounded-full  md: w-[150px] md:h-[150px] p-1 cursor-pointer hover:scale-110 duration-300'>
                <img src={logo} alt="" className=' w-full  rounded-full ' />
               <div>
                <div className=' px-2 font-bold text-xl mb-2'>{name}</div>
               
               </div>
               
                </div>
            ))
        }

    </div>
    </div>
    </div>
  )
}
