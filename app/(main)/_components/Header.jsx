"use client";

import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        

        <IconButton
          onClick={() => setOpen(!open)}
          sx={{ color: "white" }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>

      {open && (
        <nav className="bg-blue-700">
          <ul className="flex flex-col">
            <li>
              <Link href="/" className="block p-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block p-4">
                Products
              </Link>
            </li>
            <li>
              <Link href="/posts" className="block p-4">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}