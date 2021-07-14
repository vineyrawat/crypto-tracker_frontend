import React, { Fragment } from "react";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";

const User = ({ title, subtitle, logOut }) => {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors dark:text-gray-300 focus:ring-2 focus:outline-none">
          <AiOutlineUser size={20} />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute w-60 origin-top-right bg-white border dark:border-gray-700 dark:bg-gray-700 rounded-md p-2 right-0 mt-5">
            <Menu.Item>
              <div className="flex flex-col justify-center mb-3 p-2">
                <h1 className="font-medium font-heading truncate text-lg">
                  {title}
                </h1>
                <p className="text-md text-gray-500 truncate dark:text-gray-400">
                  {subtitle}
                </p>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={logOut}
                className="py-2 px-3 flex items-center text-red-500 dark:text-red-400 rounded-md font-medium hover:bg-red-600 hover:bg-opacity-10 dark:hover:bg-opacity-20 cursor-pointer"
              >
                <AiOutlineLogout className="mr-2" size={24} />
                <span>Logout</span>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default User;
