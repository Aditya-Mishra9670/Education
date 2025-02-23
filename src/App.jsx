import { Navigate, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  Login,
  Signup,
  Home,
  ForgotPass,
  Error,
  Courses,
  CourseIndividual,
  Profile,
  Settings,
  AboutUs,
  TermsOfUse,
  Cookies,
  Privacy,
  Contact,
  MyCourses,
  CreateCourse,
} from "./pages";
import { useThemeStore } from "./store/useThemeStore";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";

function App() {
  const { theme } = useThemeStore();
  const { user, getUser, checkingAuth } = useAuthStore();

  useEffect(()=>{
    getUser();
  },[getUser])

  if (checkingAuth && !user)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div data-theme={theme} className="nunito-body">
      <Header />
      <Routes>
        {/* Dynamic routes should be there after integrating backend and checking for authentication */}
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={ !user ? <Login /> :<Navigate to="/"/>} />
        <Route path="/signup" element={ !user ? <Signup /> :<Navigate to="/"/>}  />
        <Route path="/forgot-password" element={ !user ? <ForgotPass /> :<Navigate to="/"/>}  />
        <Route path="/courses" element={ user ? <Courses /> :<Navigate to="/login"/>}  />
        <Route path="/courses/:id" element={ user ? <CourseIndividual /> :<Navigate to="/login"/>} />
        <Route path="/profile" element={ user ? <Profile /> :<Navigate to="/login"/>}  />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-courses" element={ user ? <MyCourses /> :<Navigate to="/login"/>}  />
        <Route path="/create-course" element={ user.role === "teacher" ? <CreateCourse /> :<Navigate to="/login"/>}  />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}
export default App;
