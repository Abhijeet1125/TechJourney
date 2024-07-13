import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom"

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);
    const HeaderItems = ["About", "Projects", "Profiles", "Contact"]
    const [menu, setMenu] = useState(false);

    const change = () => {
        setMenu((e) => !e)
    }


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <>
            <header className=" bg-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 ">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-shadow-md transform skew-x-2">
                            My <span className="font-semibold text-orange-500">Portfolio</span>
                        </div>


                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-lg font-semibold dark:text-white">
                                    {
                                        HeaderItems.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink
                                                        to={`/${item}`}
                                                        className={({ isActive }) =>
                                                            `block py-2 pr-4 pl-3 duration-200   lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  ${ ( isActive && ("text-orange-600")  ) }`
                                                        }
                                                    >
                                                        {item}
                                                    </NavLink>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">

                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="ml-4 p-2 rounded-full bg-gray-400 dark:bg-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none"
                            >
                                {darkMode ? '🌞' : '🌜'}
                            </button>

                            <div className="block md:hidden">
                                <button onClick={change} className="rounded bg-gray-400 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>

                            {menu && (
                                <nav className="absolute top-16 right-0 w-auto bg-gray-200 dark:bg-gray-900  dark:text-white shadow-lg flex-col divide-y divide-gray-100">
                                    <ul className="flex flex-col gap-6 font-semibold ">
                                        {HeaderItems.map((item, index) => (
                                            <li key={index} onClick={change}>
                                                <NavLink
                                                        to={`/${item}`}
                                                        className={({ isActive }) =>
                                                            `block py-2 pr-4 pl-3 duration-200  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  ${ ( isActive && ("text-orange-600")  ) }`
                                                        }
                                                    >
                                                        {item}
                                                    </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
