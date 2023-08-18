import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../Buttons/ThemeTogglerBtn";
import Search from "../Buttons/Search";
import { Dialog } from "@headlessui/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <header>
      <nav className="bg-white border-gray-200 rounded-lg mb-5 shadow-lg dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-4 lg:p-6">
          <div className="flex items-center space-x-10">
            <div>
              <a
                href="/"
                className="flex items-center"
              >
                <span className="text-xl font-semibold text-green-700 lg:dark:text-green-500">
                  DevConnect
                </span>
              </a>

              {/* Navigation links */}

              <button
                data-collapse-toggle="navbar-multi-level"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-multi-level"
                aria-expanded="false"
              >
                <span className="sr-only">
                  Open main menu
                </span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                className="hidden lg:flex lg:space-x-8"
                id="navbar-multi-level"
              >
                <ul className="flex flex-col font-medium text-sm p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded lg:bg-transparent lg:text-green-700 lg:p-0 lg:dark:text-green-500 dark:bg-green-600 lg:dark:bg-transparent"
                      aria-current="page"
                    >
                      Find Developer
                    </a>
                  </li>
                  <li>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 lg:w-auto dark:text-white lg:dark:hover:text-green-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
                    >
                      Find Company{" "}
                      <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {/* Dropdown menu  */}
                    <div
                      id="dropdownNavbar"
                      className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li aria-labelledby="dropdownNavbarLink">
                          <button
                            id="doubleDropdownButton"
                            data-dropdown-toggle="doubleDropdown"
                            data-dropdown-placement="right-start"
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dropdown
                            <svg
                              className="w-2.5 h-2.5 ml-2.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </button>
                          <div
                            id="doubleDropdown"
                            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="doubleDropdownButton"
                            >
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                  Overview
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                  My downloads
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                  Billing
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                  Rewards
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      Why DevConnect
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Search />
              <div className="hidden lg:flex lg:flex-1 lg:justify-end ml-10">
                <Link to={"/login"}>
                  <button
                    type="button"
                    className="text-sm text-gray-700 dark:text-gray-300 py-2"
                  >
                    Log in
                  </button>
                </Link>
                <Link
                  className="rounded-lg py-2 px-4 ml-5 text-sm text-white bg-green-600"
                  to="/register"
                >
                  SignUp
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700"
                  onClick={() =>
                    setMobileMenuOpen(true)
                  }
                >
                  <span className="sr-only">
                    Open main menu
                  </span>
                  <Bars3Icon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex flex-col h-full relative">
            <div className="flex items-center justify-between mb-6">
              <a
                href="/"
                className="-m-1.5 p-1.5"
              >
                <span className="sr-only">
                  DevConnect
                </span>
                <a
                  href="/"
                  className="flex items-center"
                >
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-green-700 lg:dark:text-green-500">
                    DevConnect
                  </span>
                </a>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-lg p-2.5 text-gray-700"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                <span className="sr-only">
                  Close menu
                </span>
                <XMarkIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="flex-grow">
              <div
                className="flex-grow w-full lg:block lg:w-auto"
                id="navbar-multi-level"
              >
                <ul className="flex flex-col font-medium text-sm p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded lg:bg-transparent lg:text-green-700 lg:p-0 lg:dark:text-green-500 dark:bg-green-600 lg:dark:bg-transparent"
                      aria-current="page"
                    >
                      Find Developer
                    </a>
                  </li>
                  <li>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 lg:w-auto dark:text-white lg:dark:hover:text-green-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
                    >
                      Find Company{" "}
                      <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {/* Dropdown menu  */}
                    <div
                      id="dropdownNavbar"
                      className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li aria-labelledby="dropdownNavbarLink">
                          <button
                            id="doubleDropdownButton"
                            data-dropdown-toggle="doubleDropdown"
                            data-dropdown-placement="right-start"
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dropdown
                            <svg
                              className="w-2.5 h-2.5 ml-2.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </button>
                          <div
                            id="doubleDropdown"
                            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="doubleDropdownButton"
                            >
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                  Overview
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                  My downloads
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                  Billing
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                  Rewards
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    >
                      Why DevConnect
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-500/10 text-center">
            <div className="absolute bottom-0 left-0 right-0 mx-auto w-2/3 py-6">
              <Link
                to={"/register"}
                className="block rounded-lg bg-green-700 px-4 py-2 text-xs font-bold text-white hover:bg-gray-700 shadow-lg"
              >
                Signup
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
