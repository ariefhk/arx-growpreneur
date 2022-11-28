import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Brand } from "../assets";

function NavbarComponent() {
  return (
    <div className="lg:mx-[125px] mt-3">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://www.instagram.com/ariefrh.dev/">
          <img src={Brand} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        </Navbar.Brand>

        <div className="flex md:order-2">
          <Button className="bg-[#009A63]">Login / Daftar</Button>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" style={{ color: "#009A63" }}>
            Beranda
          </Navbar.Link>
          <Navbar.Link href="/navbars" style={{ color: "#4B5563" }}>
            Foto
          </Navbar.Link>
          <Navbar.Link href="/navbars" style={{ color: "#4B5563" }}>
            FAQ
          </Navbar.Link>
          <Navbar.Link href="/navbars" style={{ color: "#4B5563" }}>
            Pemenang Lelang
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
