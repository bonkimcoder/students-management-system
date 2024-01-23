import maleStudent from "../images/maleStudent.png";
import femaleStudent from "../images/femaleStudent.png";
import DataContext from "../context/DataContext";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
const GradeMembersTable = ({ student }) => {
  const { handleRowClick, handleDelete, selectedGrade } =
    useContext(DataContext);

  const confirmDelete = () => {
    const shouldDelete = window.confirm("Are you sure you want to delete?");
    if (shouldDelete) {
      handleDelete(student.id);
    }
  };

  return (
    <tr
      className="border-2 cursor-pointer"
      key={student.id}
      onClick={() => handleRowClick(student.id)}
    >
      <td
        className={`${
          student.teamName === selectedGrade
            ? "border-2 border-blue-100 border-solid"
            : ""
        } p-2`}
      >
        <img
          src={student.gender === "Female" ? femaleStudent : maleStudent}
          alt={student.name}
          className="h-20 w-full md:object-contain "
        />
      </td>
      <td
        className={`px-2 ${
          student.teamName === selectedGrade ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        {student.fullName}
      </td>
      <td
        className={`px-2 ${
          student.teamName === selectedGrade ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        {student.grade}
      </td>
      <td
        className={`px-2 ${
          student.teamName === selectedGrade ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        {student.gender}
      </td>
      <td
        className={`px-2 ${
          student.teamName === selectedGrade ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        {student.teamName}
      </td>
      <td
        className="px-2 flex justify-center items-center pt-8 text-2xl"
        onClick={confirmDelete}
      >
        <FaTrashAlt className="text-red-500" />
      </td>
    </tr>
  );
};

export default GradeMembersTable;
