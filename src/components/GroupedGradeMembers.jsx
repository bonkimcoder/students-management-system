import React, { useState, useContext } from "react";
import DataContext from "../context/DataContext";

const GroupedTeamMembers = () => {
  const { students, selectedGrade, setSelectedGrade } = useContext(DataContext);
  const [selectedTeam, setSelectedTeam] = useState(selectedGrade);

  const groupedStudents = groupTeamMembers();

  function groupTeamMembers() {
    const grades = [...new Set(students.map((student) => student.teamName))];

    grades.sort((a, b) => {
      const gradeA = parseInt(a.replace(/[^0-9]/g, ""), 10);
      const gradeB = parseInt(b.replace(/[^0-9]/g, ""), 10);
      return gradeA - gradeB;
    });

    return grades.map((grade) => ({
      team: grade,
      members: students.filter((student) => student.teamName === grade),
    }));
  }

  function handleTeamClick(team) {
    setSelectedTeam(team);
    setSelectedGrade(team);
  }

  return (
    <main className="flex justify-center items-center min-h-screen px-8 -mt-32">
      {groupedStudents.map((item) => (
        <div key={item.team} className="m-2 flex flex-col h-80 w-80">
          <h4
            id={item.team}
            className={`bg-white p-2 border-2 rounded h-12 cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl ${
              selectedTeam === item.team ? "bg-gray-300" : ""
            }`}
            onClick={() => handleTeamClick(item.team)}
          >
            {item.team}
          </h4>
          <table
            id={"hidden_" + item.team}
            className={`${
              selectedTeam === item.team ? "table-fixed" : "hidden"
            } mt-5 min-w-[80%]`}
          >
            <thead className="bg-gray-200 border-2 border-black">
              <tr>
                <th className="p-2 border-2">No.</th>
                <th className="p-2 border-2">Name</th>
                <th className="p-2 border-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {item.members.map((member, idx) => (
                <tr key={member.id} className="border-2 hover:bg-gray-100">
                  <td className="border-2 p-2">{idx + 1}</td>
                  <td className="border-2 p-2">{member.fullName}</td>
                  <td className="border-2 p-2">{member.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </main>
  );
};

export default GroupedTeamMembers;
