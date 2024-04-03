"use client"
import React, { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { userId} = useAuth();



  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link href="/"><span className="flex-none text-xl text-nowrap font-semibold dark:text-white" aria-label="Brand">Brand Logo</span></Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <svg className={`size-4 ${isMenuOpen ? 'hidden' : 'block'} flex-shrink-0`} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg className={`size-4 ${isMenuOpen ? 'block' : 'hidden'} flex-shrink-0`} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-collapse-with-animation" className={`hs-collapse ${isMenuOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <Link href="addTool" className="font-medium text-black hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-black" >Add Tool</Link>
            <Link href="contact us" className="font-medium text-black hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-black" >Contact Us</Link>

            {!userId && <>
              <Link href="/sign-in" className="flex ml-4 items-center gap-x-2 font-medium text-black hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" >
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                Log in
              </Link >
              <Link href="sign-up" className="inline-block rounded-xl bg-black px-6 py-2 text-center font-semibold text-white ">Sign up </Link>

            </>}

            {userId && <>
              <UserButton />
            </>}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
