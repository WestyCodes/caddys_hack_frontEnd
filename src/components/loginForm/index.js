export default function LoginForm({ onChange, navigate, handleForm, login }) {
    return (
        <form>
            <p className="mb-4">
                {login
                    ? `Please login to your account`
                    : `Please register an account`}
            </p>

            <div className="relative z-0 w-full mb-6 group">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    autoComplete="off"
                    required
                    onChange={(e) => {
                        onChange(e);
                    }}
                />
                <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Email address
                </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={(e) => {
                        onChange(e);
                    }}
                />
                <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Password
                </label>
            </div>

            <div className="mb-12 pb-1 pt-1 text-center">
                <button
                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-midnightBlue-200 text-slate-100 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="button"
                    onClick={handleForm}
                >
                    {login ? `Sign In` : `Sign Up`}
                </button>

                <a href="#!">
                    {login ? `Forgot password?` : `Terms and Conditions`}
                </a>
            </div>

            <div className="flex items-center justify-between pb-6">
                <p className="mb-0 mr-2">
                    {login ? `Don't have an account?` : `Have an account?`}
                </p>
                <button
                    type="button"
                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700"
                    onClick={() => {
                        login ? navigate('/register') : navigate('/login');
                    }}
                >
                    {login ? `Register` : `Log In`}
                </button>
            </div>
        </form>
    );
}
