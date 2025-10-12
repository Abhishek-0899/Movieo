import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navigation } from "../constant/Navigation";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    } else {
      navigate("/");
    }
  }, [searchInput]);

  return (
    <header className="w-full h-16 top-0 fixed bg-gray-900 bg-opacity-75 z-50">
      <div className="container mx-auto px-4 flex items-center h-full">
        <Link to="/" className="w-[120px] text-white font-bold text-xl">
          MovieDoc
        </Link>

        <nav className="hidden lg:flex items-center gap-4 ml-2">
          {navigation.map((nav) => (
            <NavLink
              key={nav.label}
              to={nav.href}
              className={({ isActive }) =>
                `text-white hover:text-red-300 ${
                  isActive ? "text-yellow-100 font-semibold" : ""
                }`
              }
            >
              {nav.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-6">
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block text-white"
            />
            <button className="text-3xl cursor-pointer text-white">
              <AiOutlineSearch />
            </button>
          </form>

          <FaUserAstronaut
            className="text-3xl h-9 w-9 rounded-full cursor-pointer
            active:scale-50 transition-all text-white"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
