import React from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';



const Navbar = () => {
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "portfolio",
        },
        {
          id: 3,
          link: "Skills",
        },
        {
          id: 4,
          link: "me",
        },
        {
          id: 5,
          link: "contact",
        },
      ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <h1 className="text-3xl font-signature ml-2">  </h1>
        </div>

        <ul className='flex'>
            {links.map(({id,link}) => (
              <li 
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                {link}
              </li>   
            ))}       
        </ul>
    </div>
  )
}

export default Navbar