import React from "react";

function NavBar() {
  return (
    <div className="flex bg-gradient-to-r from-purple-700 to-purple-900  w-[100vw] h-[5em] text-white flex-wrap items-center justify-around ">
      <h1 className="text-[1.7em] font-semibold ">ultraTraders</h1>
      <nav>
        <ul className="flex flex-wrapp-4 rounded-lg w-[16em] justify-between cursor-pointer">
          <li className="hover:text-blue-400">Home</li>
          <li className="hover:text-blue-400">Pricing</li>
          <li className="hover:text-blue-400">Testimonials</li>
        </ul>
      </nav>
      <button className="p-2 border-r-white border-[0.5px] hover:bg-purple-900 rounded-sm ">
        Get started
      </button>
    </div>
  );
}

export default NavBar;
