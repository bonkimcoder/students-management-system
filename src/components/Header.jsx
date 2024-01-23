import { useContext } from "react";
import DataContext from "../context/DataContext";
const Header = () => {
  const { gradeMemberCount, selectedGrade } = useContext(DataContext);
  return (
    <header className="flex flex-col justify-center items-center m-5">
      <h1 className="font-bold mb-5">Simple Student's Management System</h1>{" "}
      <h3>
        {selectedGrade} has{" "}
        <span className="h-8 w-8 px-2 py-0 bg-blue-100 rounded-full">
          {gradeMemberCount}
        </span>{" "}
        {gradeMemberCount > 1 ? "students" : "student"}
      </h3>
    </header>
  );
};

export default Header;
