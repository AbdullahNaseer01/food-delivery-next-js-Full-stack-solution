// 'use client'

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { CiMenuBurger } from 'react-icons/ci';

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="flex flex-col md:flex-row md:mx-16 justify-between items-center mt-6">
//       <div className="flex items-center">
//         <Link href="/">
//           <Image
//             className="mb-4 md:mb-0"
//             src="/logo.png"
//             width={94}
//             height={56}
//             alt="Logo"
//           />
//         </Link>
//         {/* Hamburger button for small screens */}
//         <button className="md:hidden ml-4" onClick={toggleMenu}>
//           <CiMenuBurger />
//         </button>
//       </div>
//       {/* Menu for larger screens or when the menu is open on small screens */}
//       <div
//         className={`${
//           isMenuOpen ? 'flex' : 'hidden'
//         } md:flex flex-col md:flex-row md:space-x-12 mt-3 md:mt-0 transition-all ease-in-out duration-300`}
//       >
//         <Link href="/">Home</Link>
//         <Link href="/menu">Menu</Link>
//         <Link href="/service">Service</Link>
//         <Link href="/cart">Cart</Link>
//       </div>
//       <div className="flex items-center w-full md:w-[300px] h-[35px] bg-white rounded-[10px] shadow mt-2 md:mt-0">
//         <Image
//           className="ml-2"
//           src="/searchicon.svg"
//           width={16}
//           height={16}
//           alt="Search Icon"
//         />
//         <input
//           className="outline-none flex-grow"
//           type="search"
//           id="gsearch"
//           name="gsearch"
//           placeholder="Search"
//         />
//         <Image
//           className="mr-2"
//           src="/carticon.svg"
//           width={16}
//           height={16}
//           alt="Cart Icon"
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






// 'use client'

// import React, { useState } from 'react';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';

const Navbar = async () => {

  const session = await getServerSession(options)

  // const [isMenuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  return (
    <nav className="flex flex-col md:flex-row md:mx-16 justify-between items-center mt-6">
      <div className="flex items-center">
        <Link href="/">
          <Image
            className="mb-4 md:mb-0"
            src="/logo.png"
            width={94}
            height={56}
            alt="Logo"
          />
        </Link>
        {/* Hamburger button for small screens */}
        {/* <button className="md:hidden ml-4" onClick={toggleMenu}>
          <CiMenuBurger />
        </button> */}
      </div>
      {/* Menu for larger screens or when the menu is open on small screens */}
      {/* <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:space-x-12 mt-3 md:mt-0 transition-all ease-in-out duration-300`}
      > */}
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/service">Service</Link>
        <Link href="/cart">Cart</Link>
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">logout</Link>
        ):(
          <Link href="/api/auth/signin">login</Link>
        )

        }
        
      {/* </div> */}
      <div className="flex items-center w-full md:w-[300px] h-[35px] bg-white rounded-[10px] shadow mt-2 md:mt-0">
        <Image
          className="ml-2"
          src="/searchicon.svg"
          width={16}
          height={16}
          alt="Search Icon"
        />
        <input
          className="outline-none flex-grow"
          type="search"
          id="gsearch"
          name="gsearch"
          placeholder="Search"
        />
        <Image
          className="mr-2"
          src="/carticon.svg"
          width={16}
          height={16}
          alt="Cart Icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
