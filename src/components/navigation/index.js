export default function NavigationBar({
    user,
    handleDropDown,
    handleLogoutOrNot,
    isOpen,
}) {
    return (
        <nav className="flex justify-between items-center px-10 py-2 text-black">
            <div className="text-2xl font-semibold text-midnightBlue-200">
                <p>Caddy's Hack</p>
            </div>
            <ul className="sm:flex space-x-4 hidden">
                <li>
                    <a href={'/caddytrack'}>
                        <span className="text-xl text-midnightBlue-200">
                            Caddy Track
                        </span>
                    </a>
                </li>
                <li>
                    <a href={user.id ? '/datavis' : '/register'}>
                        <span className="text-xl text-midnightBlue-200">
                            {user.id ? 'Your Shots' : 'Sign Up'}
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#_">
                        <span
                            className="text-xl text-midnightBlue-200"
                            onClick={() => handleLogoutOrNot()}
                        >
                            {user.id ? 'Logout' : 'Login'}
                        </span>
                    </a>
                </li>
            </ul>
            <div className="z-[51] dropdown sm:hidden">
                <button
                    className="z-51 text-white bg-transparent hover:bg-slate-600/30 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                    onClick={handleDropDown}
                >
                    <svg
                        className="w-7 h-7"
                        aria-hidden="true"
                        fill="none"
                        stroke="black"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <div
                    id="dropdown"
                    className={`absolute right-0 mr-5 z-51 w-44 bg-slate-600/80  text-white rounded divide-y divide-gray-100 shadow ${
                        isOpen ? 'block' : 'hidden'
                    }`}
                >
                    <ul className=" z-51 w-44 bg-slate-600/20  rounded divide-y divide-gray-100 shadow ">
                        <li>
                            <a
                                href={'/caddytrack'}
                                className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/90"
                            >
                                Caddy Track
                            </a>
                        </li>
                        <li>
                            <a href={user.id ? '/datavis' : '/register'}>
                                <span className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/90">
                                    {user.id ? 'Your Shots' : 'Sign Up'}
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#_">
                                <span
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/90"
                                    onClick={() => handleLogoutOrNot()}
                                >
                                    {user.id ? 'Logout' : 'Login'}
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
