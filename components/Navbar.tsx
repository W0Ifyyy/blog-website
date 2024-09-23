export default function NavBar() {
  return (
    <nav className="flex justify-between items-center shadow-sm">
      <h5 className="mx-48 p-5 text-xl">
        Code<span className="font-bold">Craft</span>
      </h5>
      <ul className="flex gap-5 mx-48 p-5 items-center">
        <li className="hover:text-violet-700 hover:cursor-pointer active:text-violet-600 transition-all">
          Home
        </li>
        <li className="hover:text-violet-700 hover:cursor-pointer active:text-violet-600 transition-all">
          Categories
        </li>
        <li>
          <button className="border border-violet-400 hover:bg-violet-400 hover:text-white active:border-violet-500 active:bg-violet-500 rounded-lg px-2 py-1 transition-all">
            Sign up
          </button>
        </li>
        <li>
          <button className="border border-violet-400 bg-violet-400 text-white hover:bg-violet-500 hover:border-violet-500 active:border-violet-600 active:bg-violet-600  rounded-lg px-2 py-1 transition-all">
            Log in
          </button>
        </li>
      </ul>
    </nav>
  );
}
