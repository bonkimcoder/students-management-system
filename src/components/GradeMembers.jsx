import { useContext } from "react";
import DataContext from "../context/DataContext";
import GradeMembersTable from "./GradeMembersTable";

const GradeMembers = () => {
  const { students } = useContext(DataContext);
  return students.map((student) => (
    <GradeMembersTable key={student.id} student={student} />
  ));
};

export default GradeMembers;
