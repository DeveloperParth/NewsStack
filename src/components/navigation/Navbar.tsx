import React from "react";
import { Button } from "@/components/common/Button";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="w-full h-16 bg-white sticky border-b flex items-center px-8">
      <div className="w-3/5">
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 py-3 pl-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for writers or news letters"
              required
            />
          </div>
        </form>
      </div>

      <div className="ml-auto">
        <Button
          leftIcon={<Avatar />}
          variant="ghost"
          size="lg"
          className=""
        >
          John Doe
        </Button>
      </div>
    </nav>
  );
}
const Avatar = () => {
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
      <Image
        src="https://i.pravatar.cc/300"
        width={40}
        height={40}
        alt="avatar"
      />
    </div>
  );
};
export default Navbar;
