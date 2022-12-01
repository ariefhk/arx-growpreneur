import React from "react";
import { Brand } from "../assets";
import { useState } from "react";

function NavbarComponent() {
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "Beranda", link: "/" },
    { name: "Foto", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Pemenang Lelang", link: "/" },
  ];

  return (
    <div className=" shadow-sm w-full fixed top-0 left-0 bg-white">
      <div className=" lg:mx-[100px] md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div>
            <img src={Brand} alt="Imag" />
          </div>

          {/* Menu */}
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-5 cursor-pointer md:hidden"
          >
            <i class="bi bi-list"></i>
          </div>
        </div>

        {/* List */}
        <div className="lg:flex lg:justify-between lg:w-[65%] ">
          <ul
            className={`bg-white md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
              open ? "top-14 " : "top-[-400px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 lg:text-sm text-md md:my-0 my-7"
              >
                <a
                  href={link.link}
                  className="text-[#4B5563] hover:text-[#009A63] duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button className="block lg:hidden bg-[#009A63] px-2 py-2 text-white rounded-md">
              Login / Daftar
            </button>
          </ul>
          <button className="hidden lg:block bg-[#009A63] px-2 py-2 text-white rounded-md">
            Login / Daftar
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
