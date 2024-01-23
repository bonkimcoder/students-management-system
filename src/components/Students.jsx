import Grades from "./Grades";
import GradeMembers from "./GradeMembers";

const Students = ({
  students,
  selectedGrade,
  handleRowClick,
  handleChange,
}) => {
  return (
    <main className="flex justify-center items-center min-h-full p-4">
      <div>
        <div className="w-{100%} flex justify-center items-center">
          <Grades selectedGrade={selectedGrade} handleChange={handleChange} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="mb-2 mt-8">
            Click on any row to add or remove a student from the selected grade
          </h4>
          <table className="table-fixed mb-8 mt-0 sm:w-[50%]">
            <thead>
              <tr>
                <th className="border-2 border-b-0">Profile Image</th>
                <th className="border-2">Name</th>
                <th className="border-2">Class</th>
                <th className="border-2">Gender</th>
                <th className="border-2">Grade</th>
                <th className="border-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                <GradeMembers
                  students={students}
                  selectedGrade={selectedGrade}
                  handleRowClick={handleRowClick}
                />
              }
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Students;
