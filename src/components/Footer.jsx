import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-neutral-600 opacity-40
    py-2 text-neutral-100 p-4 mt-8">
      <div className="flex items-center justify-center gap-3">
        <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </div>
      <p className="text-sm">Created by Abhishek</p>
    </footer>
  );
};

export default Footer;
