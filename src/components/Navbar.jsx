import { Link } from "react-router-dom";
import { IoMdSchool } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div>
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <IoMdSchool className="text-gray-100 text-4xl h-8" />

              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                My School
              </span>
            </a>
          </div>
          <ul className="flex p-5">
            <li className="mr-5">
              <Link to="/">Grades</Link>
            </li>
            <li>
              <Link to="/GroupedGradeMembers">Classes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
