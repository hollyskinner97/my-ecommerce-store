"use client";

import NavBar from "./NavBar";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  function handleCartClick() {
    router.push("/cart");
  }

  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-semibold text-center flex-grow">
        My E-Commerce Store
      </h1>
      <div className="flex items-center space-x-4">
        <button
          aria-label="Cart"
          className="text-2xl"
          onClick={handleCartClick}
        >
          🛒
        </button>
        <NavBar />
      </div>
    </header>
  );
}
