import { useContext } from "react";
import DataContext from "../context/DataContext";
const Grades = () => {
  const { selectedTeam, handleChange } = useContext(DataContext);
  return (
    <select
      className="w-[20%] border-2 focus:outline-none"
      value={selectedTeam}
      onChange={handleChange}
    >
      <option value="Grade 1">Grade 1</option>
      <option value="Grade 2">Grade 2</option>
      <option value="Grade 3">Grade 3</option>
      <option value="Grade 4">Grade 4</option>
      <option value="Grade 5">Grade 5</option>
      <option value="Grade 6">Grade 6</option>
      <option value="Grade 7">Grade 7</option>
    </select>
  );
};

export default Grades;
