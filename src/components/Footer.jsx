import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-center md:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <IoMdSchool className="text-gray-100 text-4xl h-8" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              My School
            </span>
          </a>
          <ul className="flex justify-end min-w-80 text-2xl">
            <li>
              <a href="#">
                <FaFacebook className="mr-5" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram className="mr-5" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <span className="block text-sm text-white text-center dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Credted By
          <a
            href="https://github.com/bonkimcoder/students-management-system"
            className="ml-2 hover:underline"
            target="_blank"
          >
            Bonkim
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
