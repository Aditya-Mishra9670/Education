import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Login, Signup, Home, ForgotPass, Error, Courses, CourseIndividual, Profile, Settings, AboutUs, TermsOfUse, Cookies, Privacy, Contact } from "./pages";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const {theme} = useThemeStore();
  return (
    <div data-theme={theme} className="nunito-body">
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
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />



        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
