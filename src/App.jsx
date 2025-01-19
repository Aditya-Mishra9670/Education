import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Login, Signup, Home, ForgotPass, Error, Courses, CourseIndividual, Profile } from "./pages";

function App() {
  return (
    <div data-theme="dim" className="nunito-body">
      <Header />
      <Routes>
        {/* Dynamic routes should be there after integrating backend and checking for authentication */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseIndividual />} />
        <Route path="/profile" element={<Profile />} />


        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
