import Header from "./components/Header";
import Footer from "./components/Footer";
import Students from "./components/Students";
import GroupedGradeMembers from "./components/GroupedGradeMembers";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Students />}></Route>
          <Route
            path="/GroupedGradeMembers"
            element={<GroupedGradeMembers />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
