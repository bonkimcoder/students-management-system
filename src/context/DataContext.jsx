import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [selectedGrade, setSelectedGrade] = useState(
    JSON.parse(localStorage.getItem("selectedGrade")) || "Grade 1"
  );
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("studentsList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        grade: "Grade 1A",
        gender: "Male",
        teamName: "Grade 1",
      },
      {
        id: 2,
        fullName: "Dan Jones",
        grade: "Grade 1A",
        gender: "Male",
        teamName: "Grade 1",
      },

      {
        id: 4,
        fullName: "Gail Shepherd",
        grade: "Grade 2A",
        gender: "Female",
        teamName: "Grade 2",
      },
      {
        id: 5,
        fullName: "Sam Reynolds",
        grade: "Grade 3A",
        gender: "Male",
        teamName: "Grade 3",
      },
      {
        id: 6,
        fullName: "David Henry",
        grade: "Grade 1B",
        gender: "Male",
        teamName: "Grade 1",
      },
      {
        id: 3,
        fullName: "Jill Bailey",
        grade: "Grade 4B",
        gender: "Female",
        teamName: "Grade 4",
      },
      {
        id: 7,
        fullName: "Sarah Blake",
        grade: "Grade 5A",
        gender: "Female",
        teamName: "Grade 5",
      },
      {
        id: 8,
        fullName: "James Bennet",
        grade: "Grade 5B",
        gender: "Male",
        teamName: "Grade 5",
      },
      {
        id: 9,
        fullName: "Jessica Faye",
        grade: "Grade 2A",
        gender: "Female",
        teamName: "Grade 2",
      },
      {
        id: 10,
        fullName: "Lita Stone",
        grade: "Grade 1A",
        gender: "Female",
        teamName: "Grade 1",
      },
      {
        id: 11,
        fullName: "Daniel Young",
        grade: "Grade 2B",
        gender: "Male",
        teamName: "Grade 2",
      },
      {
        id: 12,
        fullName: "Adriann Jacobs",
        grade: "Grade 3A",
        gender: "Male",
        teamName: "Grade 3",
      },
      {
        id: 13,
        fullName: "Devin Monroe",
        grade: "Grade 6B",
        gender: "Male",
        teamName: "Grade 6",
      },
      {
        id: 14,
        fullName: "Emma Thompson",
        grade: "Grade 4A",
        gender: "Female",
        teamName: "Grade 4",
      },
      {
        id: 15,
        fullName: "Owen Mitchell",
        grade: "Grade 3B",
        gender: "Male",
        teamName: "Grade 3",
      },
      {
        id: 16,
        fullName: "Mia Foster",
        grade: "Grade 5A",
        gender: "Female",
        teamName: "Grade 5",
      },
      {
        id: 17,
        fullName: "Leo Reynolds",
        grade: "Grade 2A",
        gender: "Male",
        teamName: "Grade 2",
      },
      {
        id: 18,
        fullName: "Grace Martin",
        grade: "Grade 1B",
        gender: "Female",
        teamName: "Grade 1",
      },
      {
        id: 19,
        fullName: "Nathan Brooks",
        grade: "Grade 6A",
        gender: "Male",
        teamName: "Grade 6",
      },
      {
        id: 20,
        fullName: "Ella Carter",
        grade: "Grade 4B",
        gender: "Female",
        teamName: "Grade 4",
      },
      {
        id: 21,
        fullName: "Mason Walker",
        grade: "Grade 3A",
        gender: "Male",
        teamName: "Grade 3",
      },
      {
        id: 22,
        fullName: "Olivia Stewart",
        grade: "Grade 2B",
        gender: "Female",
        teamName: "Grade 2",
      },
      {
        id: 23,
        fullName: "Ethan Davis",
        grade: "Grade 1A",
        gender: "Male",
        teamName: "Grade 1",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("studentsList", JSON.stringify(students));
  }, [students]);
  useEffect(() => {
    localStorage.setItem("selectedGrade", JSON.stringify(selectedGrade));
  }, [selectedGrade]);

  const handleChange = (e) => {
    setSelectedGrade(e.target.value);
  };

  function handleCardClick(id) {
    const transformedStudents = students.map((student) =>
      student.id === id
        ? student.teamName === selectedGrade
          ? { ...student, teamName: "" }
          : { ...student, teamName: selectedGrade }
        : student
    );
    setStudents(transformedStudents);
  }

  const gradeMemberCount = students.filter(
    (student) => student.teamName === selectedGrade
  ).length;

  function handleDelete(id) {
    setStudents((prevStudents) => {
      const updatedStudents = prevStudents.filter(
        (student) => student.id !== id
      );
      localStorage.setItem("studentsList", JSON.stringify(updatedStudents));
      return updatedStudents;
    });
  }

  return (
    <DataContext.Provider
      value={{
        students,
        selectedGrade,
        handleChange,
        handleCardClick,
        setSelectedGrade,
        gradeMemberCount,
        handleDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
