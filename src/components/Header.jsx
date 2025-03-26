import React, { useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import EventFormModal from "./EventFormModal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  const navRef = useRef();
  const logoRef = useRef();

  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(navRef.current.children, {
      y: -30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.3,
    });
  }, []);

  return (
    <header className="w-full sticky top-0 z-40 bg-neutral-50">
      <nav className="border-gray-200 px-4 lg:px-6 py-5">
        <div
          ref={navRef}
          className="flex justify-between items-center mx-auto max-w-screen-xl"
        >
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-12" alt="Logo" />
            <h1
              style={{ fontFamily: "orbitron" }}
              className="font-bold text-2xl lg:text-4xl ml-2"
            >
              Communion Hub
            </h1>
          </Link>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div
            className={`lg:flex lg:items-center text-xl ${
              isMenuOpen
                ? "block absolute top-16 left-0 w-full bg-white shadow-md p-4"
                : "hidden lg:block"
            }`}
          >
            <ul className="flex flex-col items-center lg:flex-row lg:space-x-12 space-y-4 lg:space-y-0 text-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 duration-200 ${
                      isActive ? "text-blue-500" : "text-gray-700"
                    } hover:text-blue-500`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="relative">
                <Link to="/events">
                  <button className="block py-2 duration-200 text-gray-700 hover:text-blue-500 cursor-pointer">
                    Events
                  </button>
                </Link>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 duration-200 ${
                      isActive ? "text-blue-500" : "text-gray-700"
                    } hover:text-blue-500`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {location.pathname === "/events" && (
        <div className="lg:hidden flex justify-center pb-4">
          <EventFormModal />
        </div>
      )}
    </header>
  );
}
